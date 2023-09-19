"use strict";
import { shuffleCards } from "/app/js/shuffleCards.js";
import { drawOneCard } from "/app/js/drawCards.js";

function createCardElement(card) {
  const cardElement = document.createElement("img");
  cardElement.setAttribute("src", card.image);
  cardElement.classList.add("card");
  return cardElement;
}

function createCardElements(cards) {
  return cards.map((card) => {
    return createCardElement(card);
  });
}

async function run() {
  const app = document.getElementById("blackjack-app");
  const dealerSection = document.getElementById("dealer-cards");
  const playerSection = document.getElementById("player-cards");
  const gameGreeting = document.createElement("h2");
  gameGreeting.innerText =
    "Welcome to the game of Blackjack! Gimme all your money.";
  app.append(gameGreeting);
  const deck = await shuffleCards();
  console.log(deck);
  const dealerFirstCard = await drawOneCard(deck.deckId);
  const playerFirstCard = await drawOneCard(deck.deckId);
  const playerSecondCard = await drawOneCard(deck.deckId);
  const dealerCardElements = createCardElements([dealerFirstCard]);
  const playerCardElements = createCardElements([
    playerFirstCard,
    playerSecondCard,
  ]);
  dealerSection.append(...dealerCardElements);
  playerSection.append(...playerCardElements);
}

run();
