# cmd-blackjack

1. get a pack of shuffled cards
1. cards are dealt to user and dealer
   - the dealer gives one card face up to each player in rotation clockwise, and then one card face up to themselves
   - Another round of cards is then dealt face up to each player, but the dealer takes the second card face down.
1. user chooses to hit to get a new card or stick with their current cards
1. dealer hits until the sum of their cards are 17+
   show the result of the game

Sample respons for draw card

```
{
    "success": true,
    "deck_id": "kxozasf3edqu",
    "cards": [
        {
            "code": "6H",
            "image": "https://deckofcardsapi.com/static/img/6H.png",
            "images": {
                          "svg": "https://deckofcardsapi.com/static/img/6H.svg",
                          "png": "https://deckofcardsapi.com/static/img/6H.png"
                      },
            "value": "6",
            "suit": "HEARTS"
        },
        {
            "code": "5S",
            "image": "https://deckofcardsapi.com/static/img/5S.png",
            "images": {
                          "svg": "https://deckofcardsapi.com/static/img/5S.svg",
                          "png": "https://deckofcardsapi.com/static/img/5S.png"
                      },
            "value": "5",
            "suit": "SPADES"
        }
    ],
    "remaining": 50
}
```
