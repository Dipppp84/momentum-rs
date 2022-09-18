const audio = new Audio();
audio.volume = 0.5;
let isPlay = false;
let currentTime = 0;
let currentTrack = 0;

const prev = document.querySelector('.player-prev');
const play = document.querySelector('.player-play');
const next = document.querySelector('.player-next');

const durationSlider = document.querySelector('.duration-slider');
const currentlyTimeClass = document.querySelector('.currently-time');
const duration = document.querySelector('.duration');

const svgVolume = document.querySelector('.svg-volume');
const volumeSlider = document.querySelector('.volume-slider');

const tracks = document.querySelectorAll('.track');

async function playAudio(src = `../assets/music/${currentTrack}.mp3`) {
    isPlay = true;
    audio.src = src;
    audio.currentTime = currentTime;
    await audio.play();

    let durSec = Math.floor(audio.duration);
    duration.textContent = `${Math.floor(durSec / 60)}:${String(durSec).padStart(2, '0')}`;
    durationSlider.max = durSec;

    checkCurrTime();
    play.style.setProperty('--img-playe-url', `url(\"../assets/svg/pause.svg\")`);
    defaultIcoTracks();
    tracks[currentTrack].children.item(0).style.setProperty('--img-playe-url', `url(\"../assets/svg/pause.svg\")`);
}

function checkCurrTime() {
    let durSec = Math.round(audio.currentTime);
    currentlyTimeClass.textContent = `${Math.floor(durSec / 60)}:${String(durSec).padStart(2, '0')}`;
    durationSlider.value = durSec;
    if (durSec == durationSlider.max)
        playNext()
    setTimeout(() => {
        if (isPlay)
            checkCurrTime();
    }, 1000)
}

function pauseAudio() {
    audio.pause();
    currentTime = audio.currentTime;
    isPlay = false;

    play.style.setProperty('--img-playe-url', `url(\"../assets/svg/play.svg\")`);
    tracks[currentTrack].children.item(0).style.setProperty('--img-playe-url', `url(\"../assets/svg/play.svg\")`);
}

durationSlider.addEventListener('input', () => {
    audio.currentTime = durationSlider.value;
    checkCurrTime();
})
volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value / 100;
})


play.addEventListener('click', () => {
    if (isPlay)
        pauseAudio();
    else
        playAudio();
});
next.addEventListener('click', () => {
    playNext();
});

function playNext() {
    currentTime = 0;
    if (++currentTrack > 4)
        currentTrack = 0;
    const src = `../assets/music/${currentTrack}.mp3`;
    playAudio(src);
}

prev.addEventListener('click', () => {
    currentTime = 0;
    if (--currentTrack < 0)
        currentTrack = 4;
    const src = `../assets/music/${currentTrack}.mp3`;
    playAudio(src);
});

svgVolume.addEventListener('click', () => {
    if (!audio.muted) {
        svgVolume.style.setProperty('--img-volum-url', `url(\"../assets/svg/volume-off.svg\")`);
        audio.muted = true;
    } else {
        svgVolume.style.setProperty('--img-volum-url', `url(\"../assets/svg/volume.svg\")`);
        audio.muted = false;
    }
});

tracks.forEach((value, key) => {
    value.addEventListener('click', () => {
        if (isPlay && key === currentTrack) {
            pauseAudio();
        } else {
            defaultIcoTracks();
            currentTrack = key;
            currentTime = 0;
            const src = `../assets/music/${key}.mp3`;
            playAudio(src);
        }
    });
})

function defaultIcoTracks() {
    tracks.forEach(value => {
        value.children.item(0).style.setProperty('--img-playe-url', `url(\"../assets/svg/play.svg\")`);
    });
}