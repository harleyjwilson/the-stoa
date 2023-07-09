import { QUOTE } from "./data.js";

window.addEventListener("load", function () {
    let randNo = getRandomNumber(null);
    getNewQuote(randNo);

    document.querySelector("#button-refresh").addEventListener("click", () => {
        randNo = getRandomNumber(randNo);
        getNewQuote(randNo);
    });
});

const getRandomNumber = (oldRandomNumber) => {
    let newRandomNumber;
    do {
        newRandomNumber = Math.floor(Math.random() * QUOTE.length);
    } while (newRandomNumber === oldRandomNumber);
    console.log(`newRandomNumber=${newRandomNumber}`);
    return newRandomNumber;
};

const getNewQuote = (quoteIndex) => {
    document.getElementById("quote-text").innerHTML = QUOTE[quoteIndex].text;
    QUOTE[quoteIndex].author === undefined
        ? (document.getElementById("quote-author").innerHTML = "- Unknown")
        : (document.getElementById(
              "quote-author"
          ).innerHTML = `- ${QUOTE[quoteIndex].author}`);
    console.log(QUOTE[quoteIndex]);
};
