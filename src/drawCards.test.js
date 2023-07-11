const drawCards = require("./drawCards");

it("should return a new pack of shuffled cards", () => {
  const expected = { shuffled: true, remaining: 52 };
  // given
  // when
  const actual = drawCards();
  // then
  expect(actual).toEqual(expected);
});
