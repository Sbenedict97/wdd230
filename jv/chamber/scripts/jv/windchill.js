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
