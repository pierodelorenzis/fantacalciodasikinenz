export type MatchResult = {
  home: string;
  away: string;
  homeGoals?: string;
  awayGoals?: string;
  homeScore?: string;
  awayScore?: string;
  played?: boolean;
  calculating?: boolean;
};

export type MatchweekResult = {
  matchweek: string;
  serieAWeek: string;
  matches: MatchResult[];
};

export type Standing = {
  position: number;
  team: string;
  manager?: string;
  played?: string;
  wins?: string;
  draws?: string;
  losses?: string;
  goalsFor?: string;
  goalsAgainst?: string;
  goalDifference?: string;
  points?: string;
  totalScore?: string;
  averageScore?: string;
};

export const resultsLastUpdated = "15 set 2026, 20:17";

export const matchweeks: MatchweekResult[] = [
  {
    "matches": [
      {
        "away": "Galatina FC",
        "awayGoals": "1",
        "calculating": false,
        "home": "Ajajax Brazorf",
        "homeGoals": "2",
        "played": true
      },
      {
        "away": "Dinamo Duce",
        "awayGoals": "2",
        "calculating": false,
        "home": "Santa Caterina FC",
        "homeGoals": "1",
        "played": true
      },
      {
        "away": "SOLDI E PAURA MAI AVUTI (Shalom)",
        "awayGoals": "1",
        "calculating": false,
        "home": "HeneKurraska69",
        "homeGoals": "1",
        "played": true
      },
      {
        "away": "UA Birrareal",
        "awayGoals": "1",
        "calculating": false,
        "home": "PANCHINA LUNGA FC - CSKA CONVERSE",
        "homeGoals": "1",
        "played": true
      }
    ],
    "matchweek": "1ª giornata",
    "serieAWeek": "4ª giornata di Serie A"
  },
  {
    "matches": [
      {
        "away": "PANCHINA LUNGA FC - CSKA CONVERSE",
        "calculating": true,
        "home": "Galatina FC",
        "played": false
      },
      {
        "away": "HeneKurraska69",
        "calculating": true,
        "home": "UA Birrareal",
        "played": false
      },
      {
        "away": "Santa Caterina FC",
        "calculating": true,
        "home": "SOLDI E PAURA MAI AVUTI (Shalom)",
        "played": false
      },
      {
        "away": "Ajajax Brazorf",
        "calculating": true,
        "home": "Dinamo Duce",
        "played": false
      }
    ],
    "matchweek": "2ª giornata",
    "serieAWeek": "5ª giornata di Serie A"
  },
  {
    "matches": [
      {
        "away": "UA Birrareal",
        "calculating": false,
        "home": "Santa Caterina FC",
        "played": false
      },
      {
        "away": "Galatina FC",
        "calculating": false,
        "home": "HeneKurraska69",
        "played": false
      },
      {
        "away": "Ajajax Brazorf",
        "calculating": false,
        "home": "PANCHINA LUNGA FC - CSKA CONVERSE",
        "played": false
      },
      {
        "away": "Dinamo Duce",
        "calculating": false,
        "home": "SOLDI E PAURA MAI AVUTI (Shalom)",
        "played": false
      }
    ],
    "matchweek": "3ª giornata",
    "serieAWeek": "6ª giornata di Serie A"
  },
  {
    "matches": [
      {
        "away": "HeneKurraska69",
        "calculating": false,
        "home": "Ajajax Brazorf",
        "played": false
      },
      {
        "away": "Santa Caterina FC",
        "calculating": false,
        "home": "Galatina FC",
        "played": false
      },
      {
        "away": "SOLDI E PAURA MAI AVUTI (Shalom)",
        "calculating": false,
        "home": "UA Birrareal",
        "played": false
      },
      {
        "away": "PANCHINA LUNGA FC - CSKA CONVERSE",
        "calculating": false,
        "home": "Dinamo Duce",
        "played": false
      }
    ],
    "matchweek": "4ª giornata",
    "serieAWeek": "7ª giornata di Serie A"
  },
  {
    "matches": [
      {
        "away": "Ajajax Brazorf",
        "calculating": false,
        "home": "Santa Caterina FC",
        "played": false
      },
      {
        "away": "PANCHINA LUNGA FC - CSKA CONVERSE",
        "calculating": false,
        "home": "HeneKurraska69",
        "played": false
      },
      {
        "away": "Dinamo Duce",
        "calculating": false,
        "home": "UA Birrareal",
        "played": false
      },
      {
        "away": "Galatina FC",
        "calculating": false,
        "home": "SOLDI E PAURA MAI AVUTI (Shalom)",
        "played": false
      }
    ],
    "matchweek": "5ª giornata",
    "serieAWeek": "8ª giornata di Serie A"
  },
  {
    "matches": [
      {
        "away": "SOLDI E PAURA MAI AVUTI (Shalom)",
        "calculating": false,
        "home": "Ajajax Brazorf",
        "played": false
      },
      {
        "away": "UA Birrareal",
        "calculating": false,
        "home": "Galatina FC",
        "played": false
      },
      {
        "away": "Dinamo Duce",
        "calculating": false,
        "home": "HeneKurraska69",
        "played": false
      },
      {
        "away": "Santa Caterina FC",
        "calculating": false,
        "home": "PANCHINA LUNGA FC - CSKA CONVERSE",
        "played": false
      }
    ],
    "matchweek": "6ª giornata",
    "serieAWeek": "9ª giornata di Serie A"
  }
];

export const standings: Standing[] = [
  {
    "averageScore": "76.5",
    "draws": "0",
    "goalDifference": "1",
    "goalsAgainst": "1",
    "goalsFor": "2",
    "losses": "0",
    "manager": "Myke",
    "played": "1",
    "points": "3",
    "position": 1,
    "team": "Ajajax Brazorf",
    "totalScore": "76.5",
    "wins": "1"
  },
  {
    "averageScore": "72.5",
    "draws": "0",
    "goalDifference": "1",
    "goalsAgainst": "1",
    "goalsFor": "2",
    "losses": "0",
    "manager": "Benito Mussolini",
    "played": "1",
    "points": "3",
    "position": 2,
    "team": "Dinamo Duce",
    "totalScore": "72.5",
    "wins": "1"
  },
  {
    "averageScore": "69.5",
    "draws": "1",
    "goalDifference": "0",
    "goalsAgainst": "1",
    "goalsFor": "1",
    "losses": "0",
    "manager": "aleglr",
    "played": "1",
    "points": "1",
    "position": 3,
    "team": "HeneKurraska69",
    "totalScore": "69.5",
    "wins": "0"
  },
  {
    "averageScore": "69.5",
    "draws": "1",
    "goalDifference": "0",
    "goalsAgainst": "1",
    "goalsFor": "1",
    "losses": "0",
    "manager": "skconverse",
    "played": "1",
    "points": "1",
    "position": 4,
    "team": "PANCHINA LUNGA FC - CSKA CONVERSE",
    "totalScore": "69.5",
    "wins": "0"
  },
  {
    "averageScore": "67",
    "draws": "1",
    "goalDifference": "0",
    "goalsAgainst": "1",
    "goalsFor": "1",
    "losses": "0",
    "manager": "Pedrito",
    "played": "1",
    "points": "1",
    "position": 5,
    "team": "UA Birrareal",
    "totalScore": "67",
    "wins": "0"
  },
  {
    "averageScore": "66",
    "draws": "1",
    "goalDifference": "0",
    "goalsAgainst": "1",
    "goalsFor": "1",
    "losses": "0",
    "manager": "Delle Site",
    "played": "1",
    "points": "1",
    "position": 6,
    "team": "SOLDI E PAURA MAI AVUTI (Shalom)",
    "totalScore": "66",
    "wins": "0"
  },
  {
    "averageScore": "71.5",
    "draws": "0",
    "goalDifference": "-1",
    "goalsAgainst": "2",
    "goalsFor": "1",
    "losses": "1",
    "manager": "Francesco Ferranieri",
    "played": "1",
    "points": "0",
    "position": 7,
    "team": "Galatina FC",
    "totalScore": "71.5",
    "wins": "0"
  },
  {
    "averageScore": "68.5",
    "draws": "0",
    "goalDifference": "-1",
    "goalsAgainst": "2",
    "goalsFor": "1",
    "losses": "1",
    "manager": "IVERN",
    "played": "1",
    "points": "0",
    "position": 8,
    "team": "Santa Caterina FC",
    "totalScore": "68.5",
    "wins": "0"
  }
];
