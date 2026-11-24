import { Team } from "./types";

// ⚠️ Verifica plantilla y calendario en fcbarcelona.com antes de entregar.
export const teams: Team[] = [
  {
    key: "men",
    name: "FC Barcelona (masculino)",
    coach: "Hansi Flick",
    players: [
      { name: "Joan García", position: "Portero", role: "POR", birthDate: "2001-05-04", foot: "Derecha", goals: null, assists: null },
      { name: "Wojciech Szczęsny", position: "Portero", role: "POR", birthDate: "1990-04-18", foot: "Derecha", goals: null, assists: null },
      { name: "Marc-André ter Stegen", position: "Portero", role: "POR", birthDate: "1992-04-30", foot: "Derecha", goals: null, assists: null },
      { name: "Jules Koundé", position: "Defensa", role: "LD", birthDate: "1998-11-12", foot: "Derecha", goals: null, assists: null },
      { name: "Pau Cubarsí", position: "Defensa", role: "DFC", birthDate: "2007-01-22", foot: "Derecha", goals: null, assists: null },
      { name: "Ronald Araújo", position: "Defensa", role: "DFC", birthDate: "1999-03-07", foot: "Derecha", goals: null, assists: null },
      { name: "Alejandro Balde", position: "Defensa", role: "LI", birthDate: "2003-10-18", foot: "Izquierda", goals: null, assists: null },
      { name: "Gerard Martín", position: "Defensa", role: "LI", birthDate: "2002-02-26", foot: "Izquierda", goals: null, assists: null },
      { name: "Eric García", position: "Defensa", role: "DFC", birthDate: "2001-01-09", foot: "Derecha", goals: null, assists: null },
      { name: "João Cancelo", position: "Defensa", role: "LD", birthDate: "1994-05-27", foot: "Derecha", goals: null, assists: null },
      { name: "Andreas Christensen", position: "Defensa", role: "DFC", birthDate: "1996-04-10", foot: "Derecha", goals: null, assists: null },
      { name: "Pedri", position: "Centrocampista", role: "MC", birthDate: "2002-11-25", foot: "Derecha", goals: null, assists: null },
      { name: "Frenkie de Jong", position: "Centrocampista", role: "MCD", birthDate: "1997-05-12", foot: "Derecha", goals: null, assists: null },
      { name: "Gavi", position: "Centrocampista", role: "MC", birthDate: "2004-08-05", foot: "Derecha", goals: null, assists: null },
      { name: "Fermín López", position: "Centrocampista", role: "MC", birthDate: "2003-05-11", foot: "Derecha", goals: null, assists: null },
      { name: "Marc Casadó", position: "Centrocampista", role: "MCD", birthDate: "2003-09-14", foot: "Derecha", goals: null, assists: null },
      { name: "Dani Olmo", position: "Centrocampista", role: "MCO", birthDate: "1998-05-07", foot: "Derecha", goals: null, assists: null },
      { name: "Lamine Yamal", position: "Delantero", role: "EXD", birthDate: "2007-07-13", foot: "Izquierda", goals: null, assists: null },
      { name: "Raphinha", position: "Delantero", role: "EXI", birthDate: "1996-12-14", foot: "Derecha", goals: null, assists: null }
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
      { name: "Cata Coll", position: "Portero", role: "POR", birthDate: "2001-04-23", foot: "Derecha", goals: null, assists: null },
      { name: "Ona Batlle", position: "Defensa", role: "LD", birthDate: "1999-06-10", foot: "Derecha", goals: null, assists: null },
      { name: "Irene Paredes", position: "Defensa", role: "DFC", birthDate: "1991-07-04", foot: "Derecha", goals: null, assists: null },
      { name: "Mapi León", position: "Defensa", role: "DFC", birthDate: "1995-06-13", foot: null, goals: null, assists: null },
      { name: "Aitana Bonmatí", position: "Centrocampista", role: "MC", birthDate: "1998-01-18", foot: "Derecha", goals: null, assists: null },
      { name: "Alexia Putellas", position: "Centrocampista", role: "MC", birthDate: "1994-02-04", foot: "Derecha", goals: null, assists: null },
      { name: "Patri Guijarro", position: "Centrocampista", role: "MCD", birthDate: "1998-05-17", foot: "Derecha", goals: null, assists: null },
      { name: "Vicky López", position: "Centrocampista", role: "MC", birthDate: "2006-10-26", foot: null, goals: null, assists: null },
      { name: "Caroline Graham Hansen", position: "Delantero", role: "EXD", birthDate: "1995-02-18", foot: "Derecha", goals: null, assists: null },
      { name: "Ewa Pajor", position: "Delantero", role: "DEL", birthDate: "1996-12-03", foot: "Derecha", goals: null, assists: null },
      { name: "Salma Paralluelo", position: "Delantero", role: "EXI", birthDate: "2003-11-10", foot: "Derecha", goals: null, assists: null },
      { name: "Claudia Pina", position: "Delantero", role: "EXI", birthDate: "2001-08-17", foot: null, goals: null, assists: null }
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
