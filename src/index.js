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

function checkForWinner() {}

// run through an array of cards
// if a value in the array equals a picture card, convert it to its numerical value
function convertCardToValue(card) {
  if (
    card.value === "QUEEN" ||
    card.value === "JACK" ||
    card.value === "KING"
  ) {
    return 10;
  } else if (card.value === "ACE") {
    return 11;
  }
  return Number(card.value);
}

// work out the score of the hand
// inputs: a hand of cards (array of cards)
// output: the total score
function scoreForHand(hand) {
  const score = hand.reduce((scoreValue, card) => {
    return scoreValue + convertCardToValue(card);
  }, 0);
  return score;
}

const run = async () => {
  const playersHand = [];
  const dealersHand = [];
  console.log("Welcome to Black Jack");
  console.log("Dealing Cards...");
  // console.log("These are your two cards");
  const cardData = await shuffleCards();
  const playerFirstCard = await drawOneCard(cardData.deckId);
  const dealerFirstCard = await drawOneCard(cardData.deckId);
  const playerSecondCard = await drawOneCard(cardData.deckId);
  const dealerSecondCard = await drawOneCard(cardData.deckId);
  playersHand.push(playerFirstCard, playerSecondCard);
  scoreForHand(playersHand);
  console.log("Players Cards");
  printHand(playersHand);
  dealersHand.push(dealerFirstCard);
  console.log("Dealers Cards");
  printHand(dealersHand);
  const playerResponse = prompt("Would you like to hit or stand? ");
  console.log(playerResponse);

  if (playerResponse === "hit") {
    const playerThirdCard = await drawOneCard(cardData.deckId);
    // playersHand.push(await drawOneCard(cardData.deckId));
    playersHand.push(playerThirdCard);
    console.log("Players Cards");
    printHand(playersHand);
    console.log("Dealers Cards");
    printHand(dealersHand);
  } else {
    dealersHand.push(dealerSecondCard);
    console.log("Players Cards");
    printHand(playersHand);
    console.log(`Players hand value: ${scoreForHand(playersHand)}`);
    console.log("Dealers Cards");
    printHand(dealersHand);
    console.log(`Dealers hand value: ${scoreForHand(dealersHand)}`);
  }
};

run();
