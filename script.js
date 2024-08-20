document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
      signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting
  
        // Perform form validation or AJAX request here
  
        // Show the toast notification
        $('#successToast').toast('show');
      });
    }
  });
  