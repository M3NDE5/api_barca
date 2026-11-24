import { Team } from "./types";

// ⚠️ Verifica plantilla y calendario en fcbarcelona.com antes de entregar.
export const teams: Team[] = [
  {
    key: "men",
    name: "FC Barcelona (masculino)",
    coach: "Hansi Flick",
    players: [
      { name: "Joan García", position: "Portero", role: "POR" },
      { name: "Wojciech Szczęsny", position: "Portero", role: "POR" },
      { name: "Marc-André ter Stegen", position: "Portero", role: "POR" },
      { name: "Jules Koundé", position: "Defensa", role: "LD" },
      { name: "Pau Cubarsí", position: "Defensa", role: "DFC" },
      { name: "Alejandro Balde", position: "Defensa", role: "LI" },
      { name: "Gerard Martín", position: "Defensa", role: "LI" },
      { name: "Eric García", position: "Defensa", role: "DFC" },
      { name: "João Cancelo", position: "Defensa", role: "LD" },
      { name: "Andreas Christensen", position: "Defensa", role: "DFC" },
      { name: "Pedri", position: "Centrocampista", role: "MC" },
      { name: "Frenkie de Jong", position: "Centrocampista", role: "MCD" },
      { name: "Gavi", position: "Centrocampista", role: "MC" },
      { name: "Fermín López", position: "Centrocampista", role: "MC" },
      { name: "Marc Casadó", position: "Centrocampista", role: "MCD" },
      { name: "Dani Olmo", position: "Centrocampista", role: "MCO" },
      { name: "Lamine Yamal", position: "Delantero", role: "EXD" },
      { name: "Raphinha", position: "Delantero", role: "DEL" },
      { name: "Anthony Gordon", position: "Delantero", role: "EXI" }
    ],
    matches: [
      { date: "2026-11-25T18:45:00+01:00", opponent: "Sabah", competition: "Champions League", home: false },
      { date: "2026-11-29", opponent: "Deportivo de La Coruña", competition: "La Liga", home: false },
      { date: "2026-12-06", opponent: "Celta de Vigo", competition: "La Liga", home: true },
      { date: "2026-12-08T21:00:00+01:00", opponent: "Manchester City", competition: "Champions League", home: true },
      { date: "2026-12-13", opponent: "Málaga", competition: "La Liga", home: false },
      { date: "2026-12-20", opponent: "Real Sociedad", competition: "La Liga", home: true },
      { date: "2027-01-03", opponent: "Espanyol", competition: "La Liga", home: false },
      { date: "2027-01-10", opponent: "Osasuna", competition: "La Liga", home: false }
    ]
  },
  {
    key: "women",
    name: "FC Barcelona Femení",
    coach: "Pere Romeu",
    players: [
      { name: "Cata Coll", position: "Portero", role: "POR" },
      { name: "Ona Batlle", position: "Defensa", role: "LD" },
      { name: "Irene Paredes", position: "Defensa", role: "DFC" },
      { name: "Mapi León", position: "Defensa", role: "DFC" },
      { name: "Aitana Bonmatí", position: "Centrocampista", role: "MC" },
      { name: "Alexia Putellas", position: "Centrocampista", role: "MC" },
      { name: "Patri Guijarro", position: "Centrocampista", role: "MCD" },
      { name: "Vicky López", position: "Centrocampista", role: "MC" },
      { name: "Caroline Graham Hansen", position: "Delantero", role: "EXD" },
      { name: "Ewa Pajor", position: "Delantero", role: "DEL" },
      { name: "Salma Paralluelo", position: "Delantero", role: "EXI" },
      { name: "Claudia Pina", position: "Delantero", role: "EXI" },
      { name: "Esmee Brugts", position: "Defensa", role: "LD" },
    ],
    // Fechas de Liga F; rivales por completar desde fcbarcelona.com
    matches: [
      { date: "2026-12-09", opponent: "Por confirmar", competition: "Liga F", home: null },
      { date: "2026-12-13", opponent: "Por confirmar", competition: "Liga F", home: null },
      { date: "2027-01-10", opponent: "Por confirmar", competition: "Liga F", home: null },
      { date: "2027-01-17", opponent: "Por confirmar", competition: "Liga F", home: null }
    ]
  }
];
