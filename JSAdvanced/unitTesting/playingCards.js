function playingCards(card,suit) {
    let validCards=['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let validSuits={
        S:'\u2660',
        H:'\u2665',
        D:'\u2666',
        C:'\u2663',
    };
    if(!validCards.includes(card)){
        throw new Error('Invalid card')
    }
    if(!validSuits.hasOwnProperty(suit)){
        throw new Error('Invalid suit')
    }
    return {
        card:card,
        suit:suit,
        toString:function () {
            return this.card+validSuits[this.suit];
        }
    }

}

console.log('' + playingCards('A','S'));
console.log('' + playingCards('10','H'));
console.log('' + playingCards('1','C')); //throw error!