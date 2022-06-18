function generateQuotes() {
    fetch('./quotes.json')
        .then(res => res.json())
        .then(quotes => {
            const response = quotes[Math.floor(Math.random() * quotes.length)];
            console.log(response);

            const quote = response.quote;
            document.getElementById("advice-quote").innerHTML = quote;
            console.log(quote);
        
            const author = response.author;
            document.getElementById("advice-author").innerHTML = author;
            console.log(author);
        });
}