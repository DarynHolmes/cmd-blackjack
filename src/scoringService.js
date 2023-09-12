// ace can be 1 or 11,
// therefore A, 10
// min score 11
// max score 21
// final score: 21 (highest when not bust)

// therefore A, A, 4, 4
// min score 10
// max score 30
// final score: 20  (first Ace is 1, second is 11)

// therefore A, A, 6, 4
// min score 12
// max score 32
// final score: 12  (first Ace is 1, second is 1, or you would go bust)

// the player is bust when the min score is above 21

// when working out final score
// get the highest score that is not bust, when possible

// check each card if its an ACE
// the check the hand value of cards that are not an ace
// if its greater than 11 ACE = 1 if less ACE is 11

const MAX_VALID_VALUE = 21;

function scoreForHand(hand) {
  const score = hand.reduce((scoreValue, card) => {
    return scoreValue + convertCardToValue(card);
  }, 0);
  return score;
}
// hand is an array of cards
function handScore(hand) {
  const sortedHand = hand.sort((cur, next) => {
    // if it returns 0, they are equal
    // if you return 1, then cur is greater than next
    // if you reurn -1, cur is less than next
    if (cur.value === next.value) {
      return 0;
    } else if (cur.value === "ACE") {
      return 1;
    } else if (next.value === "ACE") {
      return -1;
    }
    return 0;
  });
  let total = 0;
  for (let i = 0; sortedHand.length > i; i++) {
    if (
      sortedHand[i].value === "QUEEN" ||
      sortedHand[i].value === "JACK" ||
      sortedHand[i].value === "KING"
    ) {
      total = total + 10;
    } else if (sortedHand[i].value === "ACE") {
      if (total + 11 > MAX_VALID_VALUE) {
        total = total + 1;
      } else {
        total = total + 11;
      }
    } else {
      total = total + Number(sortedHand[i].value);
    }
  }
  return total;
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

module.exports = { scoreForHand, convertCardToValue, compareScores, handScore };

// const num = 2
// compareScores(num, 55)
