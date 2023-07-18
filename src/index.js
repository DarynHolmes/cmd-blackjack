const shuffleCards = require("./shuffleCards");
const dealCardToPlayerFaceUp = require('./dealingCard')

console.log("Welcome to Black Jack");
console.log("Dealing Cards");
console.log("These are your two cards");
const cards = shuffleCards().then((data)=> {console.log(data.deckId)});
// const drawOard = drawOneCard();
// const dealOneCard = dealCardToPlayerFaceUp()