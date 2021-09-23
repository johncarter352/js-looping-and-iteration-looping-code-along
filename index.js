// Code your solutions in this file
function writeCards(name, event) {
    let cards = [];
    for (let i = 0; i < name.length; i++) {
        cards.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
    }

    return cards;
}

function countDown(countdown) {
    let coundown = 10;
    while (countdown >= 0) {
        console.log(countdown--);
    }
}