
const apiKey = '5dd63cb22c8905d888a91caa77084d6e';
const city = 'Carlsbad'; 


async function getWeatherData() {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=$5334223&appid=$5dd63cb22c8905d888a91caa77084d6e`);
    const data = await response.json();

    const temperature = data.main.temp;
    const condition = data.weather[0].description;
    const humidity = data.main.humidity;

    document.getElementById('temperature').textContent = `${Math.round(temperature)}°F`;
    document.getElementById('condition').textContent = condition;
    document.getElementById('humidity').textContent = `${humidity}%`;

  } catch (error) {
    console.log('Error fetching weather data:', error);
  }
}


window.addEventListener('load', getWeatherData);
