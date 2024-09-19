AKfycbw4loUaeDZUfyFNhol2SZnvE78sj9JlVPUb04xnf-o
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');  // Adjust to your form element
    
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Collect form data
      const formData = {
        name: document.querySelector('#name').value,        // Adjust these field selectors to match your HTML
        email: document.querySelector('#email').value,
        workoutType: document.querySelector('#workoutType').value
      };
      
      // Send data to Google Sheets via Google Apps Script
      fetch('YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        alert('Form submitted successfully!');
        // Redirect to thank you page after submission
        window.location.href = 'thankyou.html';
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    });
  });
  