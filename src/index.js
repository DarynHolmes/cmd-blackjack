const prompt = require("prompt-sync")();
const shuffleCards = require("./shuffleCards");
const dealCardToPlayerFaceUp = require("./dealingCard");
const drawOneCard = require("./drawCards");
const {
  scoreForHand,
  convertCardToValue,
  compareScores,
} = require("./scoringService");

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

  // keep "looping" until the player chooses not to hit (to stand)
  // for loop is used when you know how many times you want to loop e.g. on an array
  // if you don't know, then you can use a while, or a do while
  // a do while will always do the looop at least once
  // a while loop, might not do the loop at all

  let playerResponse = prompt("Would you like to hit or stand? ");
  while (playerResponse === "hit" && scoreForHand(playersHand) <= 21) {
    const playerNewCard = await drawOneCard(cardData.deckId);
    playersHand.push(playerNewCard);
    printHand(playersHand);
    playerResponse = prompt("Would you like to hit or stand? ");
  }

  console.log("Players Cards");
  printHand(playersHand);
  console.log(`Players hand value: ${scoreForHand(playersHand)}`);
  console.log("Dealers Cards");
  dealersHand.push(dealerSecondCard);
  printHand(dealersHand);

  while (scoreForHand(dealersHand) <= 17) {
    const dealerNewCard = await drawOneCard(cardData.deckId);
    dealersHand.push(dealerNewCard);
    printHand(dealersHand);
  }
  console.log(`Dealers hand value: ${scoreForHand(dealersHand)}`);
  const winner = compareScores(
    scoreForHand(dealersHand),
    scoreForHand(playersHand)
  );
  console.log("WHO WON", winner);
};

run();
