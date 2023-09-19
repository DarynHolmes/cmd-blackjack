// Below gets a new deck of cards
// https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1

// const axios = require('axios')

const shuffleCards = async () => {
  // const response = await axios.get('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  // const deckId = response.data.deck_id
  // return {shuffled: true, remaining: 52, deckId: deckId }
  console.log("it worked");
};

module.exports = shuffleCards;
