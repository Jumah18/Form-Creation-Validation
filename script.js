document.addEventListener("DOMContentLoaded", function () {

const form = document.getElementById("registration-form");

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const usernameInput = document.getElementById('username');
   
    const emailInput = document.getElementById('email');
    
    const passwordInput = document.getElementById('password');
  

      const feedbackDiv = document.getElementById("form-feedback");

      const username = document.getElementById("username").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      var isValid = true;
      const messages = []

      if (username.length < 3) {
        isValid = false;
        messages.push("Username must be at least 3 characters long.");
      }

      if (!email.includes("@") || !email.includes(".")) {
        isValid = false;
        messages.push("Email must include '@' and '.' characters.");
      }
      
      if (password.length < 8) {
        isValid = false;
        messages.push("Password cannot be less than 8 charaters.");
      }
feedbackDiv.style.display="block";
if (isValid === true) {
    feedbackDiv.textContent = "Registration Successful!";
    feedbackDiv.style.color = "#28a745";
} else {
    feedbackDiv.textContent = messages.join('');
    feedbackDiv.style.color = "#dc3545";
}


})
})