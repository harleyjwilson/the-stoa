import { quote } from "data.js";

window.addEventListener("load", function () {
    let randNo;
    randNo = newQuote(randNo);

    const button = document.getElementById("button-refresh");
    button.addEventListener("click", () => {
        randNo = newQuote(randNo);
    });
});

function newQuote(randNo) {
    let tempRandNo;
    do {
        tempRandNo = Math.floor(Math.random() * quote.length);
    } while (tempRandNo == randNo);
    randNo = tempRandNo;
    console.log("Quote number: " + (randNo + 1));

    document.getElementById("quote-text").innerHTML = quote[randNo].text;
    if (quote[randNo].author == "") {
        document.getElementById("quote-author").innerHTML = "– Unknown";
    } else {
        document.getElementById("quote-author").innerHTML =
            "– " + quote[randNo].author;
    }

    return randNo;
}
