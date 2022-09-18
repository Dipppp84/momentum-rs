const containWeather = document.querySelector('.contain-weather');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const windSpeed = document.querySelector('.wind-speed');
const humidity = document.querySelector('.humidity');
const inputWeather = document.querySelector('.input-weather');
const errorText = document.querySelector('.error-text');

const appid = '92d7c0236ebc29e75385658846b87d24';

export async function getWeather(city) {
    const language = window.localStorage.getItem('language');
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${language.split('-')[0]}&appid=${appid}&units=metric`;
    const res = await fetch(url);
    if (res.status !== 200) {
        if (language === 'en-US')
            errorText.textContent = `Error! city not found for \'${city}\'!`;
        if (language === 'ru-RU')
            errorText.textContent = `Ошбика! \'${city}\' - город не найден!`;
        containWeather.classList.add('hide');
        errorText.classList.remove('hide');
        return;
    } else {
        containWeather.classList.remove('hide');
        errorText.classList.add('hide');
    }
    const data = await res.json();

    inputWeather.value = data.name;
    let textWind, textHumidity;
    if (language === 'ru-RU') {
        textWind = 'Скорость ветра';
        textHumidity = 'Влажность';
    } else if (language === 'en-US') {
        textWind = 'Wind speed';
        textHumidity = 'Humidity';
    }

    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.floor(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    windSpeed.textContent = `${textWind}: ${Math.floor(data.wind.speed)} m/s`;
    humidity.textContent = `${textHumidity}: ${Math.floor(data.main.humidity)}%`;
}

let city = window.localStorage.getItem('city');
if (city) {
    inputWeather.value = city;
} else {
    city = 'Minsk';
    inputWeather.value = 'Minsk';
}
getWeather(city);

inputWeather.addEventListener('input', () => {
    city = inputWeather.value;
    window.localStorage.setItem('city', inputWeather.value);
    getWeather(city);
});


