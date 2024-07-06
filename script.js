function sendEmail() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
  
    let subject = 'New Contact Form Submission';
    let body = `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`;
  
    let mailtoLink = `mailto:larasanchia733@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
    // Open the default mail client
    window.location.href = mailtoLink;
  
    // Optionally, reset the form after submission
    document.getElementById('contact-form').reset();
  }
  
  
  
    