$(document).ready(function() {
    $('#subscriptionForm').submit(function(event) {
      var email = $('#emailInput').val();
      var confirmation = $('#confirmationCheck').is(':checked');
      
      $(".invalid-feedback").hide();
      var isValid = true;
      
      if(email.length < 1 || !email.includes('@')) {
        $('#emailInput').next(".invalid-feedback").show();
        isValid = false;
      }
      
      if(!confirmation) {
        $('#confirmationCheck').next(".invalid-feedback").show();
        isValid = false;
      }
      
      if(!isValid) {
        event.preventDefault();
      }
    });
  });