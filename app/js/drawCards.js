// Below gets a card
// https://www.deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2

// console.log('URL', url)
const drawOneCard = (deckId) => {
  const p = axios(
    `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
  ).then((response) => response.data.cards[0]);
  return p;
};

export { drawOneCard };
