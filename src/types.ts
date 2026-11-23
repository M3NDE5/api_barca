export type TeamKey = "men" | "women";
export type Position = "Portero" | "Defensa" | "Centrocampista" | "Delantero";

export interface Player {
  name: string;
  position: Position;
}

export interface Match {
  date: string; // ISO 8601 (YYYY-MM-DD o con hora)
  opponent: string;
  competition: string;
  home: boolean | null; // null = por confirmar
}

export interface Team {
  key: TeamKey;
  name: string;
  coach: string;
  players: Player[];
  matches: Match[];
}
