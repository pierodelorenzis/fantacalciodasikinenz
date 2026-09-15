import { writeFile } from 'node:fs/promises';
import { chromium } from 'playwright';

const username = process.env.FANTACALCIO_USERNAME;
const password = process.env.FANTACALCIO_PASSWORD;
const leagueAlias = process.env.FANTACALCIO_LEAGUE_ALIAS || 'fantacalcio-da-sikinenz';
const competitionId = process.env.FANTACALCIO_COMPETITION_ID || '629232';
const output = process.env.FANTACALCIO_RESULTS_OUTPUT || 'app/results.ts';
const headless = process.env.HEADLESS !== 'false';

if (!username || !password) {
  throw new Error('Missing FANTACALCIO_USERNAME or FANTACALCIO_PASSWORD.');
}

const fixturesUrl = `https://leghe.fantacalcio.it/${leagueAlias}/view/competition/${competitionId}/fixtures?view=calendar`;
const browser = await chromium.launch({ headless });
const page = await browser.newPage({ locale: 'it-IT' });

async function dismissCookieBanner() {
  const buttons = [
    page.locator('#pt-close'),
    page.locator('#pt-accept-all'),
    page.getByRole('button', { name: /continua senza accettare/i }),
    page.getByRole('button', { name: /accetta tutti/i }),
  ];

  for (const button of buttons) {
    if (await button.first().isVisible({ timeout: 1500 }).catch(() => false)) {
      await button.first().click({ force: true });
      await page.waitForTimeout(500);
      break;
    }
  }
}

try {
  await page.goto(fixturesUrl, { waitUntil: 'domcontentloaded' });
  await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
  await dismissCookieBanner();

  const loginVisible = await page.locator('input[type="password"]').first().isVisible({ timeout: 5000 }).catch(() => false);
  if (page.url().includes('/login') || loginVisible) {
    const usernameInput = page.locator('input:not([type="hidden"])').first();
    const passwordInput = page.locator('input[type="password"]').first();

    await usernameInput.fill(username);
    await passwordInput.fill(password);
    await dismissCookieBanner();

    const loginButton = page.locator('button:has-text("LOGIN")').first();
    await loginButton.waitFor({ state: 'visible', timeout: 10000 });
    if (await loginButton.isEnabled().catch(() => false)) {
      await loginButton.click();
    } else {
      await passwordInput.press('Enter');
    }

    await page.waitForTimeout(3000);
    if (page.url().includes('/login')) {
      const bodyText = await page.locator('body').innerText({ timeout: 5000 }).catch(() => '');
      throw new Error(`Fantacalcio login failed or was blocked. Current page says: ${bodyText.slice(0, 1000)}`);
    }
  }

  await page.waitForURL(url => !url.href.includes('/login'), { timeout: 30000 });
  await page.goto(fixturesUrl, { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => {
    const text = document.body.innerText;
    return /giornata/i.test(text) && /Galatina|Birrareal|Ajajax|Duce|HeneKurraska|Santa Caterina|PANCHINA LUNGA|SOLDI E PAURA/i.test(text);
  }, null, { timeout: 45000 }).catch(async error => {
    const bodyText = await page.locator('body').innerText({ timeout: 5000 }).catch(() => '');
    console.error(`Unable to read fixtures from ${page.url()}`);
    console.error(bodyText.slice(0, 2000));
    throw error;
  });
  await page.locator('view-matchweek-card').first().waitFor({ state: 'attached', timeout: 10000 });

  const matchweeks = await page.locator('view-matchweek-card').evaluateAll(cards =>
    cards.map(card => {
      const header = card.querySelector('header');
      const matchweek = header?.querySelector('span')?.textContent?.trim() || '';
      const serieAWeek = header?.querySelector('small')?.textContent?.trim() || '';

      const matches = [...card.querySelectorAll('ui-match-row')].map(row => {
        const teamNames = [...row.querySelectorAll('span')]
          .map(span => span.textContent?.trim() || '')
          .filter(text => text && text.toLowerCase() !== 'vs' && !/^\d+([,.]\d+)?$/.test(text));
        const numbers = [...row.querySelectorAll('span')]
          .map(span => span.textContent?.trim() || '')
          .filter(text => /^\d+([,.]\d+)?$/.test(text));

        return {
          home: teamNames[0] || '',
          away: teamNames.at(-1) || '',
          homeGoals: numbers[0],
          awayGoals: numbers[1],
          homeScore: numbers[2],
          awayScore: numbers[3],
        };
      }).filter(match => match.home && match.away && match.home !== match.away);

      return { matchweek, serieAWeek, matches };
    }).filter(matchweek => matchweek.matchweek && matchweek.matches.length)
  );

  const updatedAt = new Intl.DateTimeFormat('it-IT', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Europe/Rome',
  }).format(new Date());

  const source = [
    'export type MatchResult = {',
    '  home: string;',
    '  away: string;',
    '  homeGoals?: string;',
    '  awayGoals?: string;',
    '  homeScore?: string;',
    '  awayScore?: string;',
    '};',
    '',
    'export type MatchweekResult = {',
    '  matchweek: string;',
    '  serieAWeek: string;',
    '  matches: MatchResult[];',
    '};',
    '',
    `export const resultsLastUpdated = ${JSON.stringify(updatedAt)};`,
    '',
    `export const matchweeks: MatchweekResult[] = ${JSON.stringify(matchweeks, null, 2)};`,
    '',
  ].join('\n');

  await writeFile(output, source);
  console.log(`Synced ${matchweeks.length} matchweeks to ${output}`);
} finally {
  await browser.close();
}
