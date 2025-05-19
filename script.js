document.getElementById('dumpForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Send form using EmailJS
    emailjs.sendForm('service_6imoyrx', 'template_j5ivhr1', this)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
  
        // Show thank you message
        document.getElementById('thankYouMessage').classList.remove('hidden');
  
        // Reset form
        document.getElementById('dumpForm').reset();
      }, function(error) {
        console.log('FAILED...', error);
        alert('Something went wrong. Please try again.');
      });
  });
  