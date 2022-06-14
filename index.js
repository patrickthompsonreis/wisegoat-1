let quotes = [
    {
        "id": 1,
        "quote": "The first step towards failure is trying.",
        "author": "Bernard"
    },
    {
        "id": 2,
        "author": "Chester",
        "quote": "Those who doubt your ability probably have a valid reason."
    },
    {
        "id": 3,
        "author": "Leonard",
        "quote": "The best things in life are actually really expensive."
    },
    {
        "id": 4,
        "author": "Hank",
        "quote": "Dream is the only way for you to escape the miserable reality of your life."
    },
    {
        "id": 5,
        "author": "Edgar",
        "quote": "If at first you don’t succeed. Give up and try something else."
    },
    {
        "id": 6,
        "author": "Finn",
        "quote": "Always believe that something wonderful will probably never happen."
    },
    {
        "id": 7,
        "author": "Ralph",
        "quote": "Don’t cry because it’s over. Smile because if you don’t, everyone will ask you what’s wrong."
    },
    {
        "id": 8,
        "author": "Herbert",
        "quote": "You can be replaced."
    },
    {
        "id": 9,
        "author": "Angus",
        "quote": "It probably will get worse."
    },
    {
        "id": 10,
        "author": "Elmer",
        "quote": "You’re born, you work, you die."
    },
    {
        "id": 11,
        "author": "Miguel",
        "quote": "Every corpse on mount Everest was once an extremely motivated person."
    },
    {
        "id": 12,
        "author": "Huckleberry",
        "quote": "Don’t think of yourself as an ugly person. Think of yourself as a beautiful monkey."
    },
    {
        "id": 13,
        "author": "Arthur",
        "quote": "Everything happens for a reason. Sometimes the reason is that you’re stupid and make bad decisions."
    },
    {
        "id": 14,
        "author": "Grover",
        "quote": "Always remember you’re someone’s reason to smile because you’re a joke."
    },
    {
        "id": 16,
        "author": "Rupert",
        "quote": "Don’t just talk about it. Think about it for ages and ages."
    },
    {
        "id": 17,
        "author": "Calvin",
        "quote": "I can but I won’t."
    },
    {
        "id": 18,
        "author": "Floyd",
        "quote": "Dream Big, Set Goals. Write goals on a nice paper and never look at them again."
    },
    {
        "id": 19,
        "author": "Jasper",
        "quote": "The miracle is not that you finished. The miracle is that you got off your arse in the first place."
    },
    {
        "id": 20,
        "author": "Tobias",
        "quote": "Will it be easy? Nope. Worth it? Absolutely not!"
    },
    {
        "id": 21,
        "author": "Gilbert",
        "quote": "The longer you wait, the more comfortable you can make yourself."
    },
    {
        "id": 22,
        "author": "Cleveland",
        "quote": "Start where you are, use what you have. Do a bit and abandon completely."
    },
    {
        "id": 23,
        "author": "Cornelius",
        "quote": "The distance between dreams and reality is really far and impossible."
    },
    {
        "id": 24,
        "author": "Frances",
        "quote": "Step out of your comfort zone and then step back in immediately and appreciate how nice and comfy it is."
    },
    {
        "id": 25,
        "author": "Bartholomew",
        "quote": "Sometimes you need to distance yourself from people. People who push you hard and make you do things."
    }
]

function generateQuotes() {
    const response = quotes[Math.floor(Math.random() * quotes.length)];

    const quote = response.quote;
    document.getElementById("advice-quote").innerHTML = quote;

    const author = response.author;
    document.getElementById("advice-author").innerHTML = author;
}