// Below gets a card
// https://www.deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2

// const url = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`
// console.log('URL', url)
const drawOneCard = (deckId) => {
  console.log('DECK ID', deckId)
    return  {
        value: 6,
        suit: "HEARTS"
      }
}

module.exports = drawOneCard;