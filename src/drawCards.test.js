const drawOneCard = require("./drawCards")

it("should draw one card for user", () => {
  // given
  const expected = {
    value: 6, 
    suit: "HEARTS"
  }
  // when
  const actual = drawOneCard()
  // then
  expect(actual).toEqual(expected)
});

it.skip("should only return cards that are remaining deck", () => {
  // given there is one card remaining that is a 2 of hearts 
  const expected = {value: 2, suit: "HEARTS"}
  // when we draw one card 
  const actual = drawOneCard()
  // then we should get the 2 of hearts
  expect(actual).toEqual(expected)
})