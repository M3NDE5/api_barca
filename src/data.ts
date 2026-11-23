import { Team } from "./types";

// ⚠️ Verifica plantilla y calendario en fcbarcelona.com antes de entregar.
export const teams: Team[] = [
  {
    key: "men",
    name: "FC Barcelona (masculino)",
    coach: "Hansi Flick",
    players: [
      { name: "Joan García", position: "Portero" },
      { name: "Wojciech Szczęsny", position: "Portero" },
      { name: "Marc-André ter Stegen", position: "Portero" },
      { name: "Jules Koundé", position: "Defensa" },
      { name: "Pau Cubarsí", position: "Defensa" },
      { name: "Ronald Araújo", position: "Defensa" },
      { name: "Alejandro Balde", position: "Defensa" },
      { name: "Gerard Martín", position: "Defensa" },
      { name: "Eric García", position: "Defensa" },
      { name: "João Cancelo", position: "Defensa" },
      { name: "Andreas Christensen", position: "Defensa" },
      { name: "Pedri", position: "Centrocampista" },
      { name: "Frenkie de Jong", position: "Centrocampista" },
      { name: "Gavi", position: "Centrocampista" },
      { name: "Fermín López", position: "Centrocampista" },
      { name: "Marc Casadó", position: "Centrocampista" },
      { name: "Dani Olmo", position: "Centrocampista" },
      { name: "Lamine Yamal", position: "Delantero" },
      { name: "Raphinha", position: "Delantero" }
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
      { name: "Cata Coll", position: "Portero" },
      { name: "Ona Batlle", position: "Defensa" },
      { name: "Irene Paredes", position: "Defensa" },
      { name: "Mapi León", position: "Defensa" },
      { name: "Aitana Bonmatí", position: "Centrocampista" },
      { name: "Alexia Putellas", position: "Centrocampista" },
      { name: "Patri Guijarro", position: "Centrocampista" },
      { name: "Vicky López", position: "Centrocampista" },
      { name: "Caroline Graham Hansen", position: "Delantero" },
      { name: "Ewa Pajor", position: "Delantero" },
      { name: "Salma Paralluelo", position: "Delantero" },
      { name: "Claudia Pina", position: "Delantero" }
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
