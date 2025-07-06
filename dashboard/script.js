const API_URL = 'http://localhost:3001/api'; // Match your backend URL

// Fetch runs and update dashboard
async function updateDashboard() {
  try {
    const response = await fetch(`${API_URL}/runs`);
    const runs = await response.json();

    // Calculate stats
    const totalRuns = runs.length;
    const totalDistance = runs.reduce((sum, run) => sum + Number(run.distance), 0);
    const avgDistance = totalRuns > 0 ? (totalDistance / totalRuns).toFixed(2) : 0;

    // Update UI
    document.getElementById('total-runs').textContent = totalRuns;
    document.getElementById('total-distance').textContent = `${totalDistance} km`;
    document.getElementById('avg-distance').textContent = `${avgDistance} km`;

    // Display recent runs
    const runsList = document.getElementById('runs-list');
    runsList.innerHTML = runs.slice(0, 5).map(run => `
      <li>${run.date}: ${run.distance} km</li>
    `).join('');
  } catch (error) {
    console.error('Error fetching runs:', error);
  }
}

// Initialize dashboard
updateDashboard();