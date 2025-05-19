<script src="https://cdn.emailjs.com/dist/email.min.js"></script>
<script>
  (function(){
    emailjs.init("MWGIug0Lsn4cBtzyZ"); // Make sure this matches your EmailJS public key
  })();

  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('dumpForm').addEventListener('submit', function(event) {
      event.preventDefault();

      emailjs.sendForm('service_6imoyrx', 'template_j5ivhr1', this)
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          document.getElementById('thankYouMessage').classList.remove('hidden');
          document.getElementById('dumpForm').reset();
        }, function(error) {
          console.error('FAILED...', error);
          alert('Something went wrong: ' + (error.text || 'Please check your setup.'));
        });
    });
  });
</script>
