
// Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    // Placeholder for login authentication logic
    if (email === "example@example.com" && password === "password") {
        alert('Login successful! Redirecting to home page...');
        window.location.href = "Home.html"; // Redirect to home page
    } else {
        alert('Invalid email or password. Please try again.');
    }
});

// Registration Form Submission
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var companyName = document.getElementById('companyName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    // Placeholder for registration logic (e.g., sending data to server, saving to database)
    alert('Registration successful! Redirecting to login page...');
    window.location.href = "Home.html"; // Redirect to login page
});

// You can add more JavaScript functionality as needed for your application.

// Search functionality
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var location = document.getElementById('location').value;
    var jobRole = document.getElementById('jobRole').value;
    // Simulated search results, replace with actual data retrieval logic
    var searchResults = [
        { name: 'John Doe', role: 'Designer', location: 'New York' },
        { name: 'Jane Smith', role: 'Engineer', location: 'San Francisco' },
        { name: 'Michael Johnson', role: 'Manager', location: 'Chicago' }
    ];
    displaySearchResults(searchResults);
});

// Function to display search results
function displaySearchResults(results) {
    var searchResultsDiv = document.getElementById('searchResults');
    searchResultsDiv.innerHTML = ''; // Clear previous results
    if (results.length === 0) {
        searchResultsDiv.innerHTML = '<p>No results found.</p>';
    } else {
        results.forEach(function(result) {
            var profileDetails = document.createElement('div');
            profileDetails.id = 'profileDetails';
            profileDetails.innerHTML = '<h3>' + result.name + '</h3>' +
                                       '<p>Role: ' + result.role + '</p>' +
                                       '<p>Location: ' + result.location + '</p>' +
                                       '<button onclick="viewProfile()">View Profile</button>';
            searchResultsDiv.appendChild(profileDetails);
        });
    }
}

// Function to simulate viewing a candidate's profile
function viewProfile() {
    document.getElementById('search').style.display = 'none';
    document.getElementById('candidateProfile').style.display = 'block';
}

// You can add more JavaScript functionality as needed for your application.
