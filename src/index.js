const prompt = require("prompt-sync")();
const shuffleCards = require("./shuffleCards");
const dealCardToPlayerFaceUp = require("./dealingCard");
const drawOneCard = require("./drawCards");

// a function
// takes an input of a card
// returns formatted string to display

function formatCard(playingCard) {
  return `${playingCard.value} ${playingCard.suit}`;
}

// convert an array of cards to a string
function handToString(cards) {
  return cards.map(formatCard).join(", ");
}

function printHand(cards) {
  console.log(handToString(cards));
}

const run = async () => {
  const playersHand = [];
  console.log("Welcome to Black Jack");
  console.log("Dealing Cards");
  // console.log("These are your two cards");
  const cardData = await shuffleCards();
  const playerFirstCard = await drawOneCard(cardData.deckId);
  const dealerFirstCard = await drawOneCard(cardData.deckId);
  const playerSecondCard = await drawOneCard(cardData.deckId);
  playersHand.push(playerFirstCard);
  playersHand.push(playerSecondCard);
  console.log("Players Cards");
  printHand(playersHand);
  // console.log(handToString(playersHand));
  // console.log(formatCard(playerFirstCard));
  // console.log(formatCard(playerSecondCard));

  console.log("Dealers Cards");
  console.log(formatCard(dealerFirstCard));
  const playerResponse = prompt("Would you like to hit or stand? ");
  console.log(playerResponse);
  if (playerResponse === "hit") {
    const playerThirdCard = await drawOneCard(cardData.deckId);
    // playersHand.push(await drawOneCard(cardData.deckId));
    playersHand.push(playerThirdCard);
    console.log("Players Cards");
    console.log(handToString(playersHand));
    console.log("Dealers Cards");
    console.log(formatCard(dealerFirstCard));
  } else {
    console.log("next");
  }
};

run();
