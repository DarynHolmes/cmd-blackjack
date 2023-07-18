const axios = require("axios");
// Below gets a card
// https://www.deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2

// console.log('URL', url)
const drawOneCard = (deckId) => {
  console.log("DECK ID", deckId);
  axios(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`).then(
    (response) => console.log(response.data.cards)
  );
};

module.exports = drawOneCard;
