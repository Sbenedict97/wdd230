
function updateLastModifiedDate() {
    const lastModifiedElement = document.getElementById("last-modified-date");
    const currentDate = new Date().toLocaleDateString("en-US");
    lastModifiedElement.textContent = currentDate;
  }
  
 
  function displaySubmittedDrinks() {
    const submittedDrinksElement = document.getElementById("submitted-drinks");
    const submittedDrinksCount = localStorage.getItem("submittedDrinksCount") || 0;
    submittedDrinksElement.textContent = submittedDrinksCount;
  }
  
  function updateSubmittedDrinksCount() {
    let submittedDrinksCount = localStorage.getItem("submittedDrinksCount") || 0;
    submittedDrinksCount++;
    localStorage.setItem("submittedDrinksCount", submittedDrinksCount);
  }
  

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
  
    updateSubmittedDrinksCount();
  

    displaySubmittedDrinks();
  
    form.reset();
  }

  document.addEventListener("DOMContentLoaded", () => {

    updateLastModifiedDate();
  
    displaySubmittedDrinks();
  

    const form = document.getElementById("drink-form");
    form.addEventListener("submit", handleFormSubmission);
  });
  document.getElementById('drink-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const firstName = document.getElementById('first-name').value;
    const fruit1 = document.getElementById('fruit1').value;
    const fruit2 = document.getElementById('fruit2').value;
    const fruit3 = document.getElementById('fruit3').value;
  
    const orderedDrink = `Fruit Drink with ${fruit1}, ${fruit2}, and ${fruit3}`;
    const orderOutput = document.getElementById('order-output');
    const newParagraph = document.createElement('p');
    newParagraph.textContent = orderedDrink;
    orderOutput.appendChild(newParagraph);
  
    // Clear the form after submission
    document.getElementById('drink-form').reset();
  });