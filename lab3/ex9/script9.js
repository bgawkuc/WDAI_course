let cardIdx = 1;
let cards = document.getElementsByClassName("card");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let random = document.querySelector(".random");
next.addEventListener('click', nextCard);
prev.addEventListener('click', prevCard);
random.addEventListener('click', randomCard);

showCard(cardIdx);

function nextCard() {
    cardIdx += 1;
    showCard(cardIdx)
}

function prevCard() {
    cardIdx -= 1;
    showCard(cardIdx)
}

function randomCard() {
    cardIdx = getRandomInt(1, cards.length);
    showCard(cardIdx);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function showCard(n) {
    if (n > cards.length) {
        cardIdx = 1
    }
    else if (n < 1) {
        cardIdx = cards.length
    }

    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";
    }
    cards[cardIdx - 1].style.display = "block";
}