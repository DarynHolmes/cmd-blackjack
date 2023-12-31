const {
  convertCardToValue,
  scoreForHand,
  compareScores,
} = require("./scoringService");

describe("scoring service", () => {
  describe("convertCardToValue", () => {
    it("converts a card object to a numerical value", () => {
      const testCard = {
        value: 6,
        suit: "HEARTS",
      };

      const actual = convertCardToValue(testCard);

      expect(actual).toEqual(6);
    });
    it("converts a king card to a numerical value", () => {
      const testCard = {
        value: "KING",
        suit: "HEARTS",
      };

      const actual = convertCardToValue(testCard);

      expect(actual).toEqual(10);
    });
    it("converts an ace card to a numerical value", () => {
      const testCard = {
        value: "ACE",
        suit: "HEARTS",
      };

      const actual = convertCardToValue(testCard);

      expect(actual).toEqual(11);
    });
  });
  describe("scoreForHand", () => {
    it("scores the value of a hand", () => {
      const testHand = [
        {
          value: "QUEEN",
          suit: "HEARTS",
        },
        {
          value: 6,
          suit: "SPADES",
        },
      ];

      const actual = scoreForHand(testHand);

      expect(actual).toEqual(16);
    });
  });
  describe("compareScores", () => {
    it("compares scores of dealer and player", () => {
      const playerScore = 20;
      const dealerScore = 18;

      const actual = compareScores(dealerScore, playerScore);

      expect(actual).toEqual("PLAYER");
    });
  });
});
