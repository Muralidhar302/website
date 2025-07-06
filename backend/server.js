const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Mock database
let runs = [
  { id: 1, distance: 5, date: "2024-07-01" },
  { id: 2, distance: 10, date: "2024-07-02" }
];

// Routes
app.get('/api/runs', (req, res) => {
  res.json(runs);
});

app.post('/api/runs', (req, res) => {
  const newRun = req.body;
  runs.push(newRun);
  res.status(201).json(newRun);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Add this to your existing backend routes
app.get('/api/stats', (req, res) => {
    const totalRuns = runs.length;
    const totalDistance = runs.reduce((sum, run) => sum + parseFloat(run.distance), 0);
    const totalDuration = runs.reduce((sum, run) => sum + parseInt(run.duration), 0);
    
    res.json({
        totalRuns,
        totalDistance,
        avgPace: (totalDuration / totalDistance).toFixed(1)
    });
});