export type MatchResult = {
  home: string;
  away: string;
  homeGoals?: string;
  awayGoals?: string;
  homeScore?: string;
  awayScore?: string;
};

export type MatchweekResult = {
  matchweek: string;
  serieAWeek: string;
  matches: MatchResult[];
};

export const resultsLastUpdated = 'Mai sincronizzato';

export const matchweeks: MatchweekResult[] = [];
