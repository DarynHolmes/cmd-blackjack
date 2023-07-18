// Deal card to players

const drawOneCard = require("./drawCards")

const dealCardToPlayerFaceUp = () => {
    drawOneCard()
    console.log('ONE CARD', drawOneCard())
    // Next card needs to be different
    drawOneCard()
}

module.exports = dealCardToPlayerFaceUp;