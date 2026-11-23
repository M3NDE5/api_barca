export type TeamKey = "men" | "women";
export type Position = "Portero" | "Defensa" | "Centrocampista" | "Delantero";

export type Role = "POR" | "LD" | "DFC" | "LI" | "MCD" | "MC" | "MCO" | "EXD" | "EXI" | "DEL";

export interface Player {
  name: string;
  position: Position;
  role: Role; // posición exacta para ubicarlo en la cancha
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
