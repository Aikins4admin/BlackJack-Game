// let firstCard = getRandomCard();
// let secondCard = getRandomCard();
// let cards = [firstCard, secondCard] 
let cards = []
// let sum = firstCard + secondCard;
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = " ";
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
// let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector("#cards-el");
// let playerName = "Edudzi";
// let playerChips = 1245;

let player = {
     name: "Edudzi",
     chips: 245


let playerEl = document.querySelector("#player-el");
playerEl.textContent = player.name + ": $" + player.chips;

console.log(cards)

function getRandomCard() {
    let randomNumber = Math.floor(Math.random()*13) +1;
        if (randomNumber === 1) {
            return 11;
        } else if (randomNumber > 10) {
            return 10;
        } else {
            return randomNumber
        }
    }

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard] 
    sum = firstCard + secondCard;

    renderGame();
}

function renderGame() {
        if (sum <= 20) {
            message = "Do you want to draw a new card?";
            // isAlive = false;
        } else if (sum === 21) {
            message = "Wohoo! You've got BlackJack!";
            hasBlackJack = true;
        } else {
            message = "Oopsie, You're out of the game!";
            isAlive = false;
        }
        messageEl.textContent = message;
        sumEl.textContent = "Sum: " + sum;

        cardEl.textContent = "Cards: ";
        for (let i=0; i < cards.length; i++) {
            cardEl.textContent += cards[i] + ' ';
        }
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        console.log(cards);
        renderGame();
    }
    // cardEl.textContent = "Cards: " + cards[0] + "  " + cards[1] + " " + cards[2];
}