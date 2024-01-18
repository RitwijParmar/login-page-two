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
        type: 'line',
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

    const ctxServiceCall = document.getElementById('serviceCallBreakdownChart').getContext('2d');
    const serviceCallBreakdownChart = new Chart(ctxServiceCall, {
        type: 'pie',
        data: {
            labels: ['HVAC', 'Electrical', 'Plumbing', 'Carpentry'],
            datasets: [{
                label: 'Service Call Breakdown',
                data: [120, 150, 90, 70], // Replace with your actual data
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    });    

});

function updateCharts() {
    // Logic to update charts based on the dropdowns' values
}
