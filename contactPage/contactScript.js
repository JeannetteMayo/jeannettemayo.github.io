  // Email Start
  (function () {
    emailjs.init("CwncA9ZFOEmjPiYXV");
  })();

  // Email Submission 
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the user's information from the form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Use EmailJS to send the email
    emailjs.send("service_b4y68jd", "contact_form", {
      to_email: "jeannettegmayo@gmail.com",
      message: message,
      from_name: name,
      user_email: email,
      reply_to: email,
    }).then(function () {
      alert('Your message has been sent successfully!'); // Show a success message
      document.getElementById('contact-form').reset(); // Reset the form
    }, function (error) {
      alert('An error occurred. Please try again later.'); // Show an error message
    });
  });
  

