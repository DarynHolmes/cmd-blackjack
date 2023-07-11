const shuffleCards = require("./shuffleCards");

it("should return a new pack of shuffled cards", () => {
  const expected = { shuffled: true, remaining: 52 };
  // given
  // when
  const actual = shuffleCards();
  // then
  expect(actual).toEqual(expected);
});
