async function getQuotes() {
    const path = '../assets/quotes.json';
    const res = await fetch(path);
    return await res.json();
}

const textQuoteClass = document.querySelector('.text-quote');
const authorQuoteClass = document.querySelector('.author');

let quotes;

async function setQuote() {
    const language = window.localStorage.getItem('language');
    if (!quotes)
        quotes = await getQuotes();

    const number = Math.floor(Math.random() * 10);
    const quote = quotes[number];

    if (language === 'ru-RU') {
        textQuoteClass.textContent = `\"${quote.textRu}\"`;
        authorQuoteClass.textContent = quote.authorRu;
    } else if (language === 'en-US') {
        textQuoteClass.textContent = `\"${quote.textUs}\"`;
        authorQuoteClass.textContent = quote.authorUs;
    }
}

setQuote();

const btnQuoteClass = document.querySelector('.btn-update-quote');
btnQuoteClass.addEventListener('click', () => {
    textQuoteClass.style.setProperty('opacity', '0');
    authorQuoteClass.style.setProperty('opacity', '0');
    setTimeout(() => {
        setQuote();
        textQuoteClass.style.setProperty('opacity', '1');
        authorQuoteClass.style.setProperty('opacity', '1');
    }, 500);
});
