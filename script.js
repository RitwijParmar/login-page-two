function validateForm() {
  const password = document.getElementById('password').value;
  if (password === "SmartServTest@123") {
    window.location.href = 'dashboard.html'; // Redirect to the dashboard page
    return false; // Prevent default form submission
  } else {
    alert('Error: Incorrect password.');
    return false; // Prevent default form submission
  }
}




document.addEventListener('DOMContentLoaded', function () {
    const ctx1 = document.getElementById('revenueByLocationChart').getContext('2d');
    const revenueByLocationChart = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['Everett', 'Seattle', 'Lynnwood'], // Replace with your data
            datasets: [{
                label: 'Revenue by Location',
                data: [12000, 19000, 3000], // Replace with your data
                backgroundColor: 'rgba(0, 123, 255, 0.5)',
                borderColor: 'rgba(0, 123, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const ctx2 = document.getElementById('revenueByJobTypeChart').getContext('2d');
    const revenueByJobTypeChart = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Service Plumbing', 'Bid Work HVAC'], // Replace with your data
            datasets: [{
                label: 'Revenue by Job Type',
                data: [15000, 8000], // Replace with your data
                backgroundColor: 'rgba(40, 167, 69, 0.5)',
                borderColor: 'rgba(40, 167, 69, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

function updateCharts() {
    // Logic to update charts based on the dropdowns' values
}
