const shuffleCards = require("./shuffleCards");
const dealCardToPlayerFaceUp = require("./dealingCard");
const drawOneCard = require("./drawCards");

console.log("Welcome to Black Jack");
console.log("Dealing Cards");
console.log("These are your two cards");
shuffleCards().then((data) => {
  const deckId = data.deckId;
  drawOneCard(deckId);
});
// const drawCard = drawOneCard();
// const dealOneCard = dealCardToPlayerFaceUp()
