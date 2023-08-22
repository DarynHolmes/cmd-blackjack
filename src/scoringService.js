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

// Goal: determine who wins
// input: total score of the dealer and player
// output: the winner, will be PLAYER or DEALER or PUSH

// dealerCardsTotal = 2, playerCardsTotal = 55
function compareScores(dealerCardsTotal, playerCardsTotal) {
  // player went bust
  if (playerCardsTotal > 21) {
    return "DEALER";
  }
  // deal with a bust
  if (dealerCardsTotal > 21) {
    return "PLAYER";
  }
  // player has higher hand
  if (dealerCardsTotal > playerCardsTotal) {
    return "DEALER";
  }
  // poss two dealer wins ()
  if (playerCardsTotal > dealerCardsTotal) {
    return "PLAYER";
  }
  // push
  if (playerCardsTotal === dealerCardsTotal) {
    return "PUSH";
  }
}

module.exports = { scoreForHand, convertCardToValue, compareScores };

// const num = 2
// compareScores(num, 55)
