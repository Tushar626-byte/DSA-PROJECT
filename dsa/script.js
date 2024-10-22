// Initialize Chart.js
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('progressChart').getContext('2d');
    
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Progress',
                data: [65, 75, 85, 70, 75],
                borderColor: '#4CAF50',
                tension: 0.4,
                fill: false
            },
            {
                label: 'Attendance',
                data: [80, 85, 75, 90, 85],
                borderColor: '#2196F3',
                tension: 0.4,
                fill: false
            },
            {
                label: 'Performance',
                data: [75, 70, 80, 85, 80],
                borderColor: '#FFC107',
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20
                    }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        stepSize: 20
                    }
                }
            },
            interaction: {
                intersect: false,
                mode: 'nearest'
            }
        }
    });
});

// Add click event listeners to nav items
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        // Remove active class from all nav items
        document.querySelectorAll('.nav-item').forEach(navItem => {
            navItem.classList.remove('active');
        });
        // Add active class to clicked item
        this.classList.add('active');
    });
});

// Add functionality to homework checkboxes
document.querySelectorAll('.homework-item input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const homeworkItem = this.closest('.homework-item');
        if (this.checked) {
            homeworkItem.style.opacity = '0.7';
        } else {
            homeworkItem.style.opacity = '1';
        }
    });
});