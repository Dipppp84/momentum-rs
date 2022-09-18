// Язык приложения!!!!
const radioLanguage = document.querySelectorAll('.setting-language');

let language = 'ru-RU';
if (window.localStorage.getItem('language') === null) {
    window.localStorage.setItem('language', language);
} else {
    language = window.localStorage.getItem('language');
    if (language === 'ru-RU')
        radioLanguage[0].checked = true;
    else if (language === 'en-US')
        radioLanguage[1].checked = true;
}

radioLanguage.forEach(radio => {
    radio.addEventListener('input', () => {
        window.localStorage.setItem('language', radio.value);
        window.location.reload();
    });
});
//Язык приложения END

//is Player start
const togglePlayer = document.querySelector('.toggle-is-player');
const player = document.querySelector('.player');

if (window.localStorage.getItem('isPlayer') === 'false') {
    player.classList.add('visible');
    togglePlayer.checked = false;
}

togglePlayer.addEventListener('input', () => {
    if (window.localStorage.getItem('isPlayer') === 'false') {
        player.style.setProperty('opacity', '1');
        window.localStorage.setItem('isPlayer', 'true')
        player.classList.toggle('visible');
    } else {
        player.style.setProperty('opacity', '0');
        window.localStorage.setItem('isPlayer', 'false')
        setTimeout(() => {
            player.classList.toggle('visible');
        }, 500);
    }
});
//is Player END

//is weather
const toggleWeather = document.querySelector('.toggle-is-weather');
const weather = document.querySelector('.weather');

if (window.localStorage.getItem('isWeather') === 'false') {
    weather.classList.add('visible');
    toggleWeather.checked = false;
}

toggleWeather.addEventListener('input', () => {

    if (window.localStorage.getItem('isWeather') === 'false') {
        weather.style.setProperty('opacity', '1');
        window.localStorage.setItem('isWeather', 'true')
        weather.classList.toggle('visible');
    } else {
        weather.style.setProperty('opacity', '0');
        window.localStorage.setItem('isWeather', 'false');
        setTimeout(() => {
            weather.classList.toggle('visible');
        }, 500);
    }
});
//is weather END

//is Clock
const toggleClock = document.querySelector('.toggle-is-clock');
const time = document.querySelector('.time');
const date = document.querySelector('.date');


if (window.localStorage.getItem('isClock') === 'false') {
    time.classList.add('visible');
    date.classList.add('visible');

    toggleClock.checked = false;
}

toggleClock.addEventListener('input', () => {
    if (window.localStorage.getItem('isClock') === 'false') {
        time.style.setProperty('opacity', '1');
        date.style.setProperty('opacity', '1');

        window.localStorage.setItem('isClock', 'true');
        time.classList.toggle('visible');
        date.classList.toggle('visible');
    } else {
        time.style.setProperty('opacity', '0');
        date.style.setProperty('opacity', '0');

        window.localStorage.setItem('isClock', 'false');
        setTimeout(() => {
            time.classList.toggle('visible');
            date.classList.toggle('visible');
        }, 500);
    }
});
// clock END

//is main-greeting
const toggleGreeting = document.querySelector('.toggle-is-greeting');
const greeting = document.querySelector('.main-greeting');

if (window.localStorage.getItem('isGreeting') === 'false') {
    greeting.classList.add('visible');
    toggleGreeting.checked = false;
}

toggleGreeting.addEventListener('input', () => {
    if (window.localStorage.getItem('isGreeting') === 'false') {
        greeting.style.setProperty('opacity', '1');
        window.localStorage.setItem('isGreeting', 'true');
        greeting.classList.toggle('visible');
    } else {
        greeting.style.setProperty('opacity', '0');
        window.localStorage.setItem('isGreeting', 'false');
        setTimeout(() => {
            greeting.classList.toggle('visible');
        }, 500);
    }
});
// is main-greeting END

//is quote
const toggleQuote = document.querySelector('.toggle-is-quote');
const quote = document.querySelector('.main-quote');

if (window.localStorage.getItem('isQuote') === 'false') {
    quote.classList.add('visible');
    toggleQuote.checked = false;
}

toggleQuote.addEventListener('input', () => {
    if (window.localStorage.getItem('isQuote') === 'false') {
        quote.style.setProperty('opacity', '1');
        window.localStorage.setItem('isQuote', 'true');
        quote.classList.toggle('visible');
    } else {
        quote.style.setProperty('opacity', '0');
        window.localStorage.setItem('isQuote', 'false');
        setTimeout(() => {
            quote.classList.toggle('visible');
        }, 500);
    }
});
//quote END

//lang setting menu
const mapSettingTextEn = {
    'is-player-text': 'Music',
    'is-weather-text': 'Weather',
    'is-clock-text': 'Clock',
    'is-greeting-text': 'Greeting',
    'is-quote-text': 'Quote',
    'display': 'Display',
    'setting': 'Setting',
    'photo-source': 'Photo source',
    'application-language': 'Application Language',
    'input-weather': '[Enter city]',
    'input-name': '[Enter name]',
}
const arrSettingTexts = document.querySelectorAll('.setting-type span');
const arrMyH = document.querySelectorAll('.my-h');
const cityPlaceholder = document.querySelector('.input-weather');
const namePlaceholder = document.querySelector('.input-name');

if (language === 'en-US') {
    arrSettingTexts.forEach(settingText => {
        if (settingText.classList[0])
            settingText.textContent = mapSettingTextEn[settingText.classList[0]];
    });
    arrMyH.forEach(myh => {
        if (myh.classList[0])
            myh.textContent = mapSettingTextEn[myh.classList[0]];
    });

    cityPlaceholder.placeholder = mapSettingTextEn[cityPlaceholder.classList[0]];
    namePlaceholder.placeholder = mapSettingTextEn[namePlaceholder.classList[0]];
}
//lang setting menu END

//Источник фото
const radioAPI = document.querySelectorAll('.setting-API');

if (window.localStorage.getItem('fondAPI') === null) {
    window.localStorage.setItem('fondAPI', 'git');
} else {
    if (window.localStorage.getItem('fondAPI') === 'unsplash')
        radioAPI[1].checked = true;
    else if (window.localStorage.getItem('fondAPI') === 'flickr')
        radioAPI[2].checked = true;
}

radioAPI.forEach(radio => {
    radio.addEventListener('input', () => {
        window.localStorage.setItem('fondAPI', radio.value);
        window.location.reload();
    });
});
//Источник фото END


const popupSetting = document.querySelector('.popup-setting');
popupSetting.addEventListener('click', evt => {
    if (!evt.target.closest('.popup-setting-body')) {
        popupSetting.classList.add('hide');
    }
});
//clos settign

const closeSetting = document.querySelector('.btn-setting');
closeSetting.addEventListener('click', evt => {
    popupSetting.classList.remove('hide');
});

