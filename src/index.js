const shuffleCards = require("./shuffleCards");
const dealCardToPlayerFaceUp = require("./dealingCard");
const drawOneCard = require("./drawCards");

console.log("Welcome to Black Jack");
console.log("Dealing Cards");
console.log("These are your two cards");
shuffleCards().then((data) => {
    const deckId = data.deckId;
    drawOneCard(deckId).then((data) => {
        console.log('First Card =>', data[0].value + ' ' + data[0].suit)
        drawOneCard(deckId).then((data) => {
            console.log('Dealers Card =>', data[0].value + ' ' + data[0].suit)
                drawOneCard(deckId).then((data) => {
                    console.log('Users second Card =>', data[0].value + ' ' + data[0].suit)
            })
        })
    })
    
});
