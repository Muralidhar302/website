// backend/server.js
const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

// Mock database (replace with a real DB later)
let runs = [];

// GET /api/runs
app.get('/api/runs', (req, res) => {
  res.json(runs);
});

// POST /api/runs
app.post('/api/runs', (req, res) => {
  const newRun = req.body;
  runs.push(newRun);
  res.status(201).json(newRun);
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
const cors = require('cors'); // Ensure 'cors' is installed (npm install cors)

const app = express();
app.use(cors()); // Enable CORS for all routes

// ... rest of your server code (e.g., routes)