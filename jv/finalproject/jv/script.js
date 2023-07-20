// Update the last modified date in the footer
function updateLastModifiedDate() {
    const lastModifiedElement = document.getElementById("last-modified-date");
    const currentDate = new Date().toLocaleDateString("en-US");
    lastModifiedElement.textContent = currentDate;
  }
  
  // Display the total number of submitted drinks
  function displaySubmittedDrinks() {
    const submittedDrinksElement = document.getElementById("submitted-drinks");
    const submittedDrinksCount = localStorage.getItem("submittedDrinksCount") || 0;
    submittedDrinksElement.textContent = submittedDrinksCount;
  }
  
  // Update the total number of submitted drinks in local storage
  function updateSubmittedDrinksCount() {
    let submittedDrinksCount = localStorage.getItem("submittedDrinksCount") || 0;
    submittedDrinksCount++;
    localStorage.setItem("submittedDrinksCount", submittedDrinksCount);
  }
  
  // Handle form submission and display the order details
  function handleFormSubmission(event) {
    event.preventDefault();
  
    const form = event.target;
    const inputs = form.querySelectorAll("input, select, textarea");
  
    const orderDetails = {};
  
    inputs.forEach(input => {
      const name = input.name;
      const value = input.value;
      orderDetails[name] = value;
    });
  
    const orderDate = new Date().toLocaleDateString("en-US");
  
    const formattedOutput = `
      <h2>Order Details</h2>
      <p><strong>Name:</strong> ${orderDetails["first-name"]}</p>
      <p><strong>Email:</strong> ${orderDetails.email}</p>
      <p><strong>Phone:</strong> ${orderDetails.phone}</p>
      <p><strong>Fruits:</strong> ${orderDetails.fruit1}, ${orderDetails.fruit2}, ${orderDetails.fruit3}</p>
      <p><strong>Special Instructions:</strong> ${orderDetails["special-instructions"]}</p>
      <p><strong>Order Date:</strong> ${orderDate}</p>
    `;
  
    const outputElement = document.getElementById("order-output");
    outputElement.innerHTML = formattedOutput;
  
    // Update the total number of submitted drinks
    updateSubmittedDrinksCount();
  
    // Display the updated count
    displaySubmittedDrinks();
  
    form.reset();
  }
  
  // Add event listeners when the DOM content is loaded
  document.addEventListener("DOMContentLoaded", () => {
    // Update the last modified date in the footer
    updateLastModifiedDate();
  
    // Display the total number of submitted drinks
    displaySubmittedDrinks();
  
    // Handle form submission
    const form = document.getElementById("drink-form");
    form.addEventListener("submit", handleFormSubmission);
  });
  