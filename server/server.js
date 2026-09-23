/* eslint-disable no-undef */
const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// DATABASE
const db = new sqlite3.Database("./volunteers.db", (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Connected to SQLite database");
  }
});

// CREATE TABLE
db.run(`
  CREATE TABLE IF NOT EXISTS volunteers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    phone TEXT
  )
`);

// ✅ GET ALL VOLUNTEERS
app.get("/api/volunteers", (req, res) => {
  db.all("SELECT * FROM volunteers", [], (err, rows) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json(rows);
  });
});

// ✅ ADD NEW VOLUNTEER (THIS WAS MISSING ❗)
app.post("/api/volunteers", (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ message: "All fields required" });
  }

  const sql = `
    INSERT INTO volunteers (name, email, phone)
    VALUES (?, ?, ?)
  `;

  db.run(sql, [name, email, phone], function (err) {
    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      id: this.lastID,
      name,
      email,
      phone,
    });
  });
});

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});