import { teams } from './teams';
import { teamSlug } from './team-page';
import {
  ArrowUpRight,
  ArrowDown,
  Trophy,
  Users,
  Flag,
  Heart,
} from 'lucide-react';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenuto">
        Vai al contenuto
      </a>
      <header className="header">
        <a
          className="brand"
          href="#"
          aria-label="Fantacalcio da Sikinenz, home"
        >
          <span className="brand-icon">
            <img src="./logo.png" alt="" width={46} height={46} />
          </span>
          <span>
            FANTACALCIO
            <br />
            <b>DA SIKINENZ</b>
          </span>
        </a>
        <nav aria-label="Navigazione principale">
          <a href="#lega">La lega</a>
          <a href="#partecipanti">Le squadre</a>
          <a href="#montepremi">
            Montepremi <ArrowUpRight size={14} />
          </a>
        </nav>
        <span className="est">EST. 2026</span>
      </header>
      <main id="contenuto">
        <section className="hero" aria-labelledby="hero-title">
          <img
            className="crest hero-animation"
            src="./pici.gif"
            alt="Animazione del Fantacalcio da Sikinenz"
            width={480}
            height={270}
            fetchPriority="high"
          />
          <div className="hero-copy">
            <p className="eyebrow">
              <span /> OTTO RIVALI. UNA SOLA LEGA.
            </p>
            <h1 id="hero-title">
              <span>TU SEI RITARDATO</span>
              <span className="hero-bridge">MA QUESTO E'</span>
              <em>FANTACALCIO DA SIKINENZ</em>
            </h1>
            <p className="hero-motto">
              Il calcio è una fede. Il fanta, una guerra.
            </p>
            <p className="intro">
              Amici fuori dal campo.
              <br className="mobile-break" /> Avversari fino all’ultimo bonus.
            </p>
            <div className="hero-actions">
              <a className="cta" href="#lega">
                Scopri la lega <ArrowDown size={17} />
              </a>
              <a className="hero-secondary" href="#partecipanti">
                Le otto squadre <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>
        <section className="stats" aria-label="La lega in numeri">
          <div>
            <Users />
            <strong>08</strong>
            <span>
              PARTECIPANTI
              <br />
              <small>Otto modi di sognare il titolo.</small>
            </span>
          </div>
          <div>
            <Trophy />
            <strong>
              400<span>€</span>
            </strong>
            <span>
              MONTEPREMI TOTALE
              <br />
              <small>La gloria ha anche un prezzo.</small>
            </span>
          </div>
          <div>
            <Flag />
            <strong>2026</strong>
            <span>
              L’ANNO ZERO
              <br />
              <small>Le grandi rivalità iniziano qui.</small>
            </span>
          </div>
        </section>
        <section className="about section" id="lega">
          <div>
            <p className="eyebrow">01 — LA NOSTRA LEGA</p>
            <h2>
              CI DIVIDE LA FORMAZIONE.
              <br />
              <em>CI UNISCE LA PASSIONE.</em>
            </h2>
          </div>
          <div className="about-copy">
            <p>
              Una lega, otto partecipanti e quella voglia di vincere che rende
              speciale ogni giornata.
            </p>
            <p>
              Fantacalcio da Sikinenz è il nostro appuntamento con il calcio:
              intuizioni da allenatore, gol all’ultimo minuto e sfottò che
              durano tutta la settimana. Perché il bello del fanta è giocarsela
              insieme.
            </p>
            <span className="signature">
              <Heart size={16} /> SPIRITO COMPETITIVO.
            </span>
          </div>
        </section>
        <section className="players section" id="partecipanti">
          <div className="section-head">
            <div>
              <p className="eyebrow">02 — I PROTAGONISTI</p>
              <h2>
                OTTO POSTI.
                <br />
                <em>UNA SOLA AMBIZIONE.</em>
              </h2>
            </div>
            <p>
              La sfida è tra otto partecipanti.
              <br />
              Otto identità, una sola voglia di vincere.
            </p>
          </div>
          <div className="player-grid">
            {teams.map((team, i) => (
              <article className="player" key={team.logo}>
                <span className="player-index">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <a
                  className="team-logo-link"
                  href={`./${teamSlug(team.logo)}.html`}
                  aria-label={`Scopri ${team.name}`}
                >
                  <img
                    className="team-logo"
                    src={`./teams/${team.logo}`}
                    alt={`Logo ${team.name}`}
                    width={240}
                    height={240}
                    loading="lazy"
                  />
                </a>
                <h3><a href={`./${teamSlug(team.logo)}.html`}>{team.name}</a></h3>
                <a className="team-roster-link" href={`./${teamSlug(team.logo)}.html`}>Scopri la squadra <ArrowUpRight size={14}/></a>
              </article>
            ))}
          </div>
        </section>
        <section className="prize section" id="montepremi">
          <div>
            <p className="eyebrow">03 — LA POSTA IN GIOCO</p>
            <h2>
              PER LA GLORIA.
              <br />
              <em>E NON SOLO.</em>
            </h2>
            <p>
              Ogni scelta conta. Ogni bonus pesa.
              <br />
              In palio, il montepremi della nostra lega.
            </p>
            <span className="prize-note">
              La ripartizione dei premi sarà comunicata prossimamente.
            </span>
          </div>
          <div className="prize-value">
            <Trophy size={38} strokeWidth={1.3} />
            <strong>
              400<span>€</span>
            </strong>
            <span>MONTEPREMI TOTALE</span>
          </div>
        </section>
        <section className="closing">
          <p>FANTACALCIO DA SIKINENZ</p>
          <h2>
            CHE VINCA <em>IL MIGLIORE.</em>
            <br />
            <span>O QUELLO CON PIÙ CULO.</span>
          </h2>
          <a href="#">
            Torna in cima <ArrowUpRight size={16} />
          </a>
        </section>
      </main>
      <footer>
        <a className="brand" href="#">
          <img
            className="footer-logo"
            src="./logo.png"
            alt=""
            width={36}
            height={36}
          />
          <span>FANTACALCIO DA SIKINENZ</span>
        </a>
        <p>8 partecipanti. 400 € in palio. Infinite discussioni.</p>
        <span>© 2026 · Fatto per la nostra lega.</span>
      </footer>
    </>
  );
}
