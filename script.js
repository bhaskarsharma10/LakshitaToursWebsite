// Add JavaScript code here

// Example: Smooth scrolling to section on navigation link click
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll(".nav-menu li a");

  for (const link of navLinks) {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({
        behavior: "smooth"
      });
    });
  }
});

// Example: Validate and submit booking form
/*document.addEventListener("DOMContentLoaded", function() {
  const bookingForm = document.querySelector(".booking form");

  if (bookingForm) {
    bookingForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const pickupInput = document.getElementById("pickup");
      const destinationInput = document.getElementById("destination");

      // Perform form validation
      if (pickupInput.value.trim() === "") {
        alert("Please enter a pickup location.");
        pickupInput.focus();
        return;
      }

      if (destinationInput.value.trim() === "") {
        alert("Please enter a destination.");
        destinationInput.focus();
        return;
      }

      // Form submission logic goes here
      // You can use AJAX or other techniques to send the form data to the server
      alert("Form submitted successfully!");
      bookingForm.reset();
    });
  }
});

// Example: Validate and submit contact form
document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.querySelector(".contact form");

  if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const messageInput = document.getElementById("message");

      // Perform form validation
      if (nameInput.value.trim() === "") {
        alert("Please enter your name.");
        nameInput.focus();
        return;
      }

      if (emailInput.value.trim() === "") {
        alert("Please enter your email.");
        emailInput.focus();
        return;
      }

      if (messageInput.value.trim() === "") {
        alert("Please enter a message.");
        messageInput.focus();
        return;
      }

      // Form submission logic goes here
      // You can use AJAX or other techniques to send the form data to the server
      alert("Form submitted successfully!");
      contactForm.reset();
    });
  }
});
*/
