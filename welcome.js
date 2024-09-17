// Handle form submission
document.getElementById('welcome-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve user data from the form
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    // Optionally store user data in localStorage
    localStorage.setItem('userName', name);
    localStorage.setItem('userAge', age);

    // Redirect to the workout generator page
    window.location.href = 'index.html';
});
