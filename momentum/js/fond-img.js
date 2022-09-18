function getRandomNumb() {
    const min = 1;
    const max = 20;
    return String(Math.floor(Math.random() * (max - min + 1) + min)).padStart(2, '0');
}

const imgFond = document.querySelector('.img-fond');

function getTimesOfDay() {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12)
        return 'morning';
    else if (hour >= 12 && hour < 18)
        return 'afternoon';
    else if (hour >= 18 && hour < 24)
        return 'evening';
    else if (hour >= 0 && hour < 6)
        return 'night';
}

let flickrDataAPI;

async function getFlickrDataAPI() {
    if (flickrDataAPI)
        return flickrDataAPI;
    const key = 'ce1547d662c015608a12897cfcc78fda';//030b8d8de6cd1154
    const urlToAPI = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${getTimesOfDay()}&extras=url_h&format=json&nojsoncallback=1`
    const res = await fetch(urlToAPI);
    flickrDataAPI = await res.json();
    console.log(flickrDataAPI.photos)
}
async function getUnsplashDataAPI() {
    const key = 'cy4iFtP1Yo_nrDdwP9WiSGtqJvQ4pyeWwSEK1Czq65I'; //ekKI3xM3Kvxtt3jUslFW7eo2UQ66aaHcYgTsruVrMek
    const urlToAPI = `https://api.unsplash.com/photos/random?orientation=landscape&query=${getTimesOfDay()}&client_id=${key}`
    const res = await fetch(urlToAPI);
    const dataAPI = await res.json();
    return dataAPI.urls.regular;
}

async function changeImg(numb) {
    const fondAPI = window.localStorage.getItem('fondAPI');

    let url;
    if (fondAPI === 'git')
        url = `https://raw.githubusercontent.com/Dipppp84/stage1-tasks/assets/images/${getTimesOfDay()}/${numb}.jpg`;
    else if (fondAPI === 'unsplash') {
        url = await getUnsplashDataAPI();
    } else if (fondAPI === 'flickr') {
        await getFlickrDataAPI();
        console.log(numb)
        url = flickrDataAPI.photos.photo[+numb].url_h;
    }

    await new Promise((resolve) => {
        const img = new Image();
        img.src = url;
        img.onload = resolve;
    });

    imgFond.style.setProperty('--img-url', `url(\"${url}\")`);
}

//first IMG!
let currentlyNumb = getRandomNumb(); //01-20
changeImg(currentlyNumb);

///

function nextImg() {
    let numb = +currentlyNumb;
    if (numb === 20)
        numb = 0;
    currentlyNumb = String(++numb).padStart(2, '0');
    changeImg(currentlyNumb);
}

function prevImg() {
    let numb = +currentlyNumb;
    if (numb === 1)
        numb = 21;
    currentlyNumb = String(--numb).padStart(2, '0');
    changeImg(currentlyNumb);
}

const slidePrevClass = document.querySelector('.slide-prev');
const slideNextClass = document.querySelector('.slide-next');

slideNextClass.addEventListener('click', () => {
    nextImg();
})

slidePrevClass.addEventListener('click', () => {
    prevImg();
})
