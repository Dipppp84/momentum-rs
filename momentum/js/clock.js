import {Greeting} from "./Greeting.js";

// Clock START
const timeClass = document.querySelector('.time');
const dateClass = document.querySelector('.date');
const greetingClass = document.querySelector('.greeting');
//Name START
const inputNameClass = document.querySelector('.input-name');

let name = window.localStorage.getItem('name');
if (name) {
    inputNameClass.value = name;
    const width = inputNameClass.value.length * 28;
    inputNameClass.style.setProperty('width', `${width}px`);
} else {
    const width = 220;
    inputNameClass.style.setProperty('width', `${width}px`);
}
inputNameClass.addEventListener('input', () => {
    const width = inputNameClass.value.length * 28;
    inputNameClass.style.setProperty('width', `${width}px`);
    window.localStorage.setItem('name', inputNameClass.value);
});
//Name END
let currentlyDay = null;
let currentlyHour = null;


function showClock() {
    let language = window.localStorage.getItem('language');
    const date = new Date();
    timeClass.textContent = date.toLocaleTimeString();
    if (currentlyDay !== date.getDay()) {
        currentlyDay = date.getDay();
        dateClass.textContent = date.toLocaleDateString(language, {
            weekday: 'long', month: 'long', day: 'numeric'
        });
    }
    if (currentlyHour !== date.getHours()) {
        currentlyHour = date.getHours();
        greetingClass.textContent = Greeting.getGreeting(date.getHours(), language);
    }

    setTimeout(showClock, 1000);
}

showClock();
// Clock END

