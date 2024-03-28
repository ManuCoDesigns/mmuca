// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name == '' || email == '' || message == '') {
        alert('Please fill in all fields.');
        return false;
    }

    // Add more validation logic as needed (e.g., email format)
}

// Attach the validation function to the form submission event
document.querySelector('form').addEventListener('submit', function(e) {
    if (!validateForm()) {
        e.preventDefault(); // Prevent form submission if validation fails
    }
});

// Example function to fetch events from the server
function fetchEvents() {
    // Make an AJAX request to fetch events data
    // Update the events section with the retrieved data
}

// Call the fetchEvents function when the page loads
window.addEventListener('load', function() {
    fetchEvents();
});
