// API URL (backend must be running on port 3001)
const API_URL = "http://localhost:3001/api";

// Wait for the page to load before adding event listeners
document.addEventListener("DOMContentLoaded", function() {
    // Start Run Button
    document.getElementById("startRunBtn").addEventListener("click", function() {
        console.log("Start Run button clicked!");
        document.getElementById("home").style.display = "none";
        document.getElementById("runForm").style.display = "block";
    });

    // Form Submission
    document.getElementById("runLogForm").addEventListener("submit", async function(e) {
        e.preventDefault(); // Prevent page reload
        
        const run = {
            distance: document.getElementById("distance").value,
            duration: document.getElementById("duration").value,
            date: document.getElementById("date").value
        };

        console.log("Submitting run:", run);

        // Send data to backend
        try {
            const response = await fetch(`${API_URL}/runs`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(run)
            });
            const newRun = await response.json();
            console.log("Run saved:", newRun);
            addRunToUI(newRun);
        } catch (error) {
            console.error("Error saving run:", error);
        }

        // Reset form
        this.reset();
        document.getElementById("runForm").style.display = "none";
        document.getElementById("home").style.display = "block";
    });

    // Load runs on page load
    fetchRuns();
});

// Fetch runs from backend
async function fetchRuns() {
    try {
        const response = await fetch(`${API_URL}/runs`);
        const runs = await response.json();
        runs.forEach(addRunToUI);
    } catch (error) {
        console.error("Error fetching runs:", error);
    }
}

// Display a run in the UI
function addRunToUI(run) {
    const runsList = document.getElementById("runsList");
    const runElement = document.createElement("div");
    runElement.className = "run-item";
    runElement.innerHTML = `
        <h3>${run.date}</h3>
        <p>Distance: ${run.distance} km</p>
        <p>Duration: ${run.duration} minutes</p>
    `;
    runsList.prepend(runElement);
}
