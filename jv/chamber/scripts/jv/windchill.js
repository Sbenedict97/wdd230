const temperatureInput = document.getElementById('temperature');
const windSpeedInput = document.getElementById('wind-speed');

function calculateWindChill() {
    const temperature = parseFloat(temperatureInput.value);
    const windSpeed = parseFloat(windSpeedInput.value);

    if (temperature <= 50 && windSpeed > 3.0) {
        const windChill = calculateFormula(temperature, windSpeed);
        displayWindChill(windChill);
    } else {
        displayNotApplicable();
    }
}

function calculateFormula(temperature, windSpeed) {
    const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
    return windChill.toFixed(2);
}


function displayWindChill(windChill) {
    const windChillElement = document.getElementById('wind-chill');
    windChillElement.textContent = windChill + ' °F';
}

function displayNotApplicable() {
    const windChillElement = document.getElementById('wind-chill');
    windChillElement.textContent = 'N/A';
}

const calculateButton = document.getElementById('calculate-button');
calculateButton.addEventListener('click', calculateWindChill);

function calculateWindChill(temperature, windSpeed) {
 
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}


const apiKey = '100e49a9aceb05797bc8884364b94d62';
const city = 'Fairbanks';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;


function calculateWindChill(temperature, windSpeed) {

  return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const temperature = Math.round((data.main.temp * 9) / 5 + 32);
    const condition = data.weather[0].description;
    const weatherIcon = data.weather[0].icon;
    const windSpeed = data.wind.speed;
    const windChill = data.wind.deg;

    document.getElementById('current-temperature').textContent = `Temperature: ${temperature}°F`;
    document.getElementById('current-condition').textContent = `Condition: ${condition}`;
    document.getElementById('current-weather-icon').src = `https://openweathermap.org/img/w/${weatherIcon}.png`;
    document.getElementById('current-wind-speed').textContent = `Wind Speed: ${windSpeed} m/s`;
    document.getElementById('current-wind-chill').textContent = `Wind Chill: ${windChill ? Math.round(calculateWindChill(temperature, windSpeed)) + '°F' : 'N/A'}`;

    // Fetching forecast data
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${YOUR_CITY}&appid=${apiKey}`;
    return fetch(forecastUrl);
  })
  .then(response => response.json())
  .then(data => {
    const forecasts = data.list.slice(0, 3); // Get the first 3 forecast entries

    forecasts.forEach((forecast, index) => {
      const forecastDayElement = document.getElementById(`forecast-day-${index + 1}`);
      const forecastIconElement = forecastDayElement.querySelector('.forecast-icon');
      const forecastTemperatureElement = forecastDayElement.querySelector('.forecast-temperature');

      const temperatureHigh = Math.round((forecast.main.temp_max * 9) / 5 + 32);
      const temperatureLow = Math.round((forecast.main.temp_min * 9) / 5 + 32);
      const weatherIcon = forecast.weather[0].icon;

      forecastIconElement.src = `https://openweathermap.org/img/w/${weatherIcon}.png`;
      forecastTemperatureElement.textContent = `High: ${temperatureHigh}°F, Low: ${temperatureLow}°F`;
    });
  })
  .catch(error => {
    console.log(error);
  });

