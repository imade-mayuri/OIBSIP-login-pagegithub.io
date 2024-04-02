
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent form submission
  
    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Hardcoded credentials (replace with your authentication logic)
    var validUsername = "user123";
    var validPassword = "pass123";
  
    // Check if the entered credentials match
    if (username === validUsername && password === validPassword) {
      alert("Login successful!");
      // Redirect to another page or do something else on successful login
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });
  