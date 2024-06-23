//  server.js

require("dotenv").config();
const express = require("express");
const cors = require("cors"); // Ajout du module CORS
const { Pool } = require("pg");
const app = express();
const port = 3000;

app.use(cors()); // Utilisation du middleware CORS

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

app.get("/quote", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT text FROM quotes ORDER BY RANDOM() LIMIT 1"
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
