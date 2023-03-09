let player = {
  name: "Jeff",
  chips: 150
}

let cards =[]
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message ="";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name  + ": $" + player.chips;


function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  sumEl.textContent = "Sum: " + sum;
  // cardsEl.textContent = "Cards: " + " " + cards[0] + " " + cards[1];
  cardsEl.textContent = "Cards: ";
  for (i = 0; i< cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
    if (sum <= 20 || !sum) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
      hasBlackJack = true;
      message = "Wohoo! You've got Blackjack!";
  } else {
      message = "You're out of the game!";
      isAlive = false;
  }
  messageEl.textContent = message;
  
};

function newCard() {
  if (isAlive && !hasBlackJack) {
  let card = getRandomCard();
  sum += card;
  cards.push(card);
  renderGame();
  console.log("Drawing a new card from the deck!");
  }
}

function getRandomCard() {
  return Math.floor((Math.random() * 10) + 2);
}






