const { handScore } = require("./scoringService");

// red, green, refactor
describe("Calculating the score of a hand", () => {
  it("should return the value of 1 card", () => {
    const actual = handScore([
      {
        value: "6",
      },
    ]);
    expect(actual).toEqual(6);
  });

  it("should return the value of 2 cards", () => {
    const actual = handScore([
      {
        value: "6",
      },
      {
        value: "5",
      },
    ]);
    expect(actual).toEqual(11);
  });

  it("should return the value of 3 cards", () => {
    const actual = handScore([
      {
        value: "6",
      },
      {
        value: "10",
      },
      {
        value: "9",
      },
    ]);
    expect(actual).toEqual(25);
  });

  it("should return the value of a jack", () => {
    const actual = handScore([
      {
        value: "JACK",
      },
    ]);
    expect(actual).toEqual(10);
  });

  it("should return the value of all face cards", () => {
    const actual = handScore([
      {
        value: "JACK",
      },
      {
        value: "QUEEN",
      },
      {
        value: "KING",
      },
    ]);
    expect(actual).toEqual(30);
  });

  it("should return the highest value of a hand with only an ace", () => {
    const actual = handScore([
      {
        value: "ACE",
      },
    ]);
    expect(actual).toEqual(11);
  });

  it("should return the highest value of a hand with without going bust when an ace is the last card", () => {
    const actual = handScore([
      {
        value: "6",
      },
      {
        value: "6",
      },
      {
        value: "ACE",
      },
    ]);
    expect(actual).toEqual(13);
  });

  it("should return the highest value of a hand with without going bust when an ace is the first card", () => {
    const actual = handScore([
      {
        value: "ACE",
      },
      {
        value: "6",
      },
      {
        value: "5",
      },
    ]);
    expect(actual).toEqual(12);
  });

  it("should return the highest value of a hand with only 3 aces", () => {
    const actual = handScore([
      {
        value: "ACE",
      },
      {
        value: "ACE",
      },
      {
        value: "ACE",
      },
    ]);
    expect(actual).toEqual(13);
  });

  it("should return the highest value of a hand with a mix of cards", () => {
    const actual = handScore([
      {
        value: "ACE",
      },
      {
        value: "JACK",
      },
      {
        value: "10",
      },
    ]);
    expect(actual).toEqual(21);
  });
});
