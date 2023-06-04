// validation.js

// Function to validate the form
function validateForm(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form inputs
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
  
    // Perform validation
    let isValid = true;
  
    if (nameInput.value.trim() === '') {
      isValid = false;
      nameInput.classList.add('error');
    } else {
      nameInput.classList.remove('error');
    }
  
    if (!isValidEmail(emailInput.value.trim())) {
      isValid = false;
      emailInput.classList.add('error');
    } else {
      emailInput.classList.remove('error');
    }
  
    // If the form is valid, submit it
    if (isValid) {
      document.getElementById('myForm').submit();
    }
  }
  
  // Function to validate email format
  function isValidEmail(email) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  }
  
  // Event listener for form submission
  document.getElementById('myForm').addEventListener('submit', validateForm);
  