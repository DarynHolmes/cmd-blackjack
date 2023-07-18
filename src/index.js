const shuffleCards = require("./shuffleCards");
const dealCardToPlayerFaceUp = require("./dealingCard");
const drawOneCard = require("./drawCards");

const run = async () => {
  console.log("Welcome to Black Jack");
  console.log("Dealing Cards");
  console.log("These are your two cards");
  const cardData = await shuffleCards();
  const playerFirstCard = await drawOneCard(cardData.deckId);
  console.log(
    `Player First Card => ${playerFirstCard.value} ${playerFirstCard.suit}`
  );
  const dealerFirstCard = await drawOneCard(cardData.deckId);
  const playerSecondCard = await drawOneCard(cardData.deckId);
  console.log(
    `Player Second Card => ${playerSecondCard.value} ${playerSecondCard.suit}`
  );
  console.log(
    `Dealer First Card => ${dealerFirstCard.value} ${dealerFirstCard.suit}`
  );
};

run();
