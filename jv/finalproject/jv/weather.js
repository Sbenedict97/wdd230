// Replace 'YOUR_API_KEY' with your actual API key from OpenWeatherMap
const apiKey = '5dd63cb22c8905d888a91caa77084d6e';
const city = 'Carlsbad'; // Replace with your desired city

// Function to fetch weather data from the API
async function getWeatherData() {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=$5334223&appid=$5dd63cb22c8905d888a91caa77084d6e`);
    const data = await response.json();

    // Access the weather data from the response
    const temperature = data.main.temp;
    const condition = data.weather[0].description;
    const humidity = data.main.humidity;

    // Update the DOM with the weather data
    document.getElementById('temperature').textContent = `${Math.round(temperature)}°F`;
    document.getElementById('condition').textContent = condition;
    document.getElementById('humidity').textContent = `${humidity}%`;

  } catch (error) {
    console.log('Error fetching weather data:', error);
  }
}

// Call the function to fetch weather data when the page loads
window.addEventListener('load', getWeatherData);
