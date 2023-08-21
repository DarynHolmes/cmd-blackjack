function scoreForHand(hand) {
  const score = hand.reduce((scoreValue, card) => {
    return scoreValue + convertCardToValue(card);
  }, 0);
  return score;
}

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

function compareScores(dealerCardsTotal, playerCardsTotal) {
  // check who is bust 
  if (playerCardsTotal > 21) {
    return 'playerBust'
  }
  // player has higher hand
  // poss one player wins ()
  // deal with a bust
  // poss two dealer wins ()
  // push
}

module.exports = { scoreForHand, convertCardToValue };
