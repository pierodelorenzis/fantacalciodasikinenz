import { createServer } from 'vite';
import react from '@vitejs/plugin-react';
import postcss from 'postcss';
import tailwindcss from '@tailwindcss/postcss';
import { renderToStaticMarkup } from 'react-dom/server';
import { createElement } from 'react';
import { readFile, writeFile, mkdir, cp, rm, access } from 'node:fs/promises';
import { resolve } from 'node:path';

const output = resolve('dist-pages');
const origin = new URL(process.env.SITE_URL || 'https://pierodelorenzis.github.io/fantacalciodasikinenz/');
if (!['http:', 'https:'].includes(origin.protocol)) throw new Error('SITE_URL must be an HTTP(S) URL');
if (!origin.pathname.endsWith('/')) origin.pathname += '/';
const escape = value => value.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
const server = await createServer({
  configFile: false,
  plugins: [react()],
  server: {middlewareMode: true, hmr: false, watch: null},
  appType: 'custom',
});
try {
  const { default: Home } = await server.ssrLoadModule('/app/page.tsx');
  const { teams } = await server.ssrLoadModule('/app/teams.ts');
  for (const team of teams) await access(resolve('public/teams', team.logo));
  const body = renderToStaticMarkup(createElement(Home));
  const css = await postcss([tailwindcss()]).process(await readFile('app/globals.css', 'utf8'), {from: resolve('app/globals.css')});
  await rm(output, {recursive:true, force:true});
  await mkdir(output, {recursive:true});
  await cp('public', output, {recursive:true});
  await writeFile(resolve(output, 'style.css'), css.css);
  const title = 'Fantacalcio da Sikinenz | Otto rivali. Una sola lega.';
  const description = '8 squadre, 400 € di montepremi e una passione che ci unisce. Scopri il Fantacalcio da Sikinenz.';
  await writeFile(resolve(output, 'index.html'), `<!doctype html><html lang="it"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title><meta name="description" content="${description}"><link rel="canonical" href="${escape(origin.href)}"><link rel="icon" type="image/png" href="./logo.png"><link rel="stylesheet" href="./style.css"><meta property="og:type" content="website"><meta property="og:locale" content="it_IT"><meta property="og:title" content="${title}"><meta property="og:description" content="${description}"><meta property="og:url" content="${escape(origin.href)}"><meta property="og:image" content="${escape(new URL('og.png',origin).href)}"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${title}"><meta name="twitter:description" content="${description}"><meta name="twitter:image" content="${escape(new URL('og.png',origin).href)}"></head><body>${body}</body></html>`);
  await writeFile(resolve(output, '.nojekyll'), '');
  console.log(`GitHub Pages: ${output} — ${teams.length} team logos, static HTML and CSS.`);
} finally {
  await server.close();
}
