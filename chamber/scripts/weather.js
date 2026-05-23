const apiKey = '8943c25162abb6971954851fa598641e';
const city = 'Asaba';

const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

async function getWeather() {

    const response = await fetch(weatherURL);

    const data = await response.json();

    displayWeather(data);
}

function displayWeather(data) {

    const weather = document.querySelector('#current-weather');

    weather.innerHTML = `
        <p><strong>${data.main.temp}°C</strong></p>
        <p>${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
    `;
}

getWeather();
