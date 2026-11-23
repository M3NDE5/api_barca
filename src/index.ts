import express, { Request, Response } from "express";
import cors from "cors";
import { teams } from "./data";
import { Team, TeamKey } from "./types";

const app = express();
app.use(cors());

const find = (key: string): Team | undefined => teams.find((t) => t.key === (key as TeamKey));
const upcoming = (t: Team) =>
  t.matches
    .filter((m) => new Date(m.date).getTime() >= Date.now() - 24 * 3600 * 1000)
    .sort((a, b) => a.date.localeCompare(b.date));

app.get("/", (_req, res) => res.json({ status: "ok", endpoints: ["/api/teams", "/api/teams/:team", "/api/teams/:team/players", "/api/teams/:team/coach", "/api/teams/:team/matches"] }));

app.get("/api/teams", (_req, res) =>
  res.json(teams.map((t) => ({ key: t.key, name: t.name, coach: t.coach })))
);

app.get("/api/teams/:team", (req: Request, res: Response) => {
  const t = find(req.params.team);
  if (!t) return res.status(404).json({ error: "Equipo no encontrado. Usa 'men' o 'women'." });
  res.json({ ...t, matches: upcoming(t) });
});

app.get("/api/teams/:team/players", (req: Request, res: Response) => {
  const t = find(req.params.team);
  if (!t) return res.status(404).json({ error: "Equipo no encontrado" });
  res.json(t.players);
});

app.get("/api/teams/:team/coach", (req: Request, res: Response) => {
  const t = find(req.params.team);
  if (!t) return res.status(404).json({ error: "Equipo no encontrado" });
  res.json({ coach: t.coach });
});

app.get("/api/teams/:team/matches", (req: Request, res: Response) => {
  const t = find(req.params.team);
  if (!t) return res.status(404).json({ error: "Equipo no encontrado" });
  res.json(upcoming(t));
});

const PORT = Number(process.env.PORT) || 3000;
app.listen(PORT, () => console.log(`API corriendo en puerto ${PORT}`));
