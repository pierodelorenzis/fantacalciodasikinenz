# Fantacalcio da Sikinenz

Sito vetrina della lega: 8 squadre e 400 € di montepremi.

## Sviluppo

Richiede Node.js 22.13 o successivo.

```sh
npm ci
npm run dev
```

## GitHub Pages

```sh
npm run build
```

La cartella `dist-pages/` contiene HTML, CSS e immagini. Non richiede un server Node, Cloudflare o Sites. I percorsi relativi funzionano anche sotto `/fantacalciodasikinenz/`.

Il workflow `.github/workflows/pages.yml` pubblica ogni aggiornamento di `main`. In **Settings → Pages → Build and deployment**, selezionare **GitHub Actions**. Il workflow ottiene l'indirizzo del sito da GitHub per i metadati social; per una build locale con un altro dominio impostare `SITE_URL`.

Riferimento: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

## Loghi e squadre

- `public/logo.png`: stemma originale della lega.
- `public/teams/`: otto loghi originali ricevuti, conservati senza ridisegno.
- `app/teams.ts`: nomi delle squadre e file dei loghi associati.
- `app/page.tsx` e `app/globals.css`: contenuti e grafica.

I loghi si possono aprire a dimensione originale dalle schede. I nomi degli allenatori e la ripartizione dei premi non sono stati forniti.
