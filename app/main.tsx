import { createRoot } from 'react-dom/client';
import Home from './page';
import TeamPage, { teamSlug } from './team-page';
import { teams } from './teams';
import './globals.css';
const filename = window.location.pathname.split('/').pop();
const team = teams.find(item => `${teamSlug(item.logo)}.html` === filename);
createRoot(document.getElementById('root')!).render(team ? <TeamPage team={team}/> : <Home/>);
