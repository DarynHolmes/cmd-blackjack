const shuffleCards = require("./shuffleCards");
const axios = require('axios')

jest.mock('axios')
beforeEach(() => {jest.resetAllMocks()})

const shuffledDeckOne = {shuffled: true, remaining: 52, deck_id: 'abcd'}
const shuffledDeckTwo = {shuffled: true, remaining: 52, deck_id: 'zzzz'}

it("should return a new pack of shuffled cards", async() => {
  axios.get.mockImplementation(() => Promise.resolve({ data: {
    shuffled: true, remaining: 52, deck_id: 'abcd'
  }}));
  const deckId = await shuffleCards();
  const expected = { shuffled: true, remaining: 52, deckId: 'abcd' };
  const actual = await shuffleCards();
  // then
  expect(actual).toEqual(expected);
});

it('return a unique deckId', async() => {
  axios.get.mockReturnValueOnce(Promise.resolve({ data:shuffledDeckOne}))
  .mockReturnValueOnce(Promise.resolve({ data: shuffledDeckTwo}))
  const deckOne = await shuffleCards();
  const deckTwo = await shuffleCards();
  expect(deckOne.deckId).not.toBe(deckTwo.deckId)
})
