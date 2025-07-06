document.getElementById('startRunBtn').addEventListener('click', function() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('runForm').style.display = 'block';
});

document.getElementById('runLogForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const run = {
        distance: document.getElementById('distance').value,
        duration: document.getElementById('duration').value,
        date: document.getElementById('date').value
    };

    console.log('Run logged:', run);
    addRunToUI(run);

    this.reset();
    document.getElementById('runForm').style.display = 'none';
    document.getElementById('home').style.display = 'block';
});

function addRunToUI(run) {
    const runsList = document.getElementById('runsList');
    const runElement = document.createElement('div');
    runElement.className = 'run-item';
    runElement.innerHTML = `
        <h3>${run.date}</h3>
        <p>Distance: ${run.distance} km</p>
        <p>Duration: ${run.duration} minutes</p>
    `;
    runsList.prepend(runElement);
}

// Sample runs for demo
const sampleRuns = [
    { distance: 5.2, duration: 30, date: '2023-05-15' },
    { distance: 3.8, duration: 25, date: '2023-05-10' },
    { distance: 10.0, duration: 55, date: '2023-05-05' }
];

sampleRuns.forEach(addRunToUI);
