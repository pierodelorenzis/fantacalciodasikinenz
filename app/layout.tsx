import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
 metadataBase: new URL('https://fantacalcio-da-sikinenz.pedritooff.chatgpt.site'),
 icons: {icon:'/logo.png'},
 title: 'Fantacalcio da Sikinenz | Otto rivali. Una sola lega.',
 description: 'La casa del Fantacalcio da Sikinenz. 8 partecipanti, 400 € di montepremi e una passione che ci unisce. Dal 2026.',
 openGraph: {title:'Fantacalcio da Sikinenz',description:'8 partecipanti. 400 € in palio. Infinite discussioni.',type:'website',locale:'it_IT',images:[{url:'/og.png',alt:'Fantacalcio da Sikinenz — 8 partecipanti, 400 € in palio'}]},
 twitter:{card:'summary_large_image',images:['/og.png'],title:'Fantacalcio da Sikinenz',description:'8 partecipanti. 400 € in palio. Infinite discussioni.'}
};
export default function RootLayout({children}: Readonly<{children:React.ReactNode}>){return <html lang="it"><body>{children}</body></html>}
