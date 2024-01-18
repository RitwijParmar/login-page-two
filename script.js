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
