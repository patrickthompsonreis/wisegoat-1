const API_URL = "https://api.adviceslip.com/advice";

function get(url) {
    return fetch(url).then(response => response.json());
}

const API = { get };

const quote = document.getElementById("quote");

function getQuotes() {
    API.get(API_URL).then(data => addQuote(
        data['slip']['advice']));
        console.log(API_URL)
}

function addQuote(quote) {
    quote.innerText = '"' + quote + '"';
}

window.onload = getQuotes;