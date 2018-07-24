function cardDeckBuilder(selector) {
    let container=$(selector);
    function addCard(face,suit) {
        //let cardFaces=[2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
        let cardSuits={
            C:'\u2663',
            D:'\u2666',
            H:'\u2665',
            S:'\u2660'
        }
        let currentCard=$('<div>');
        currentCard.addClass('card');
        currentCard.text(`${face} ${cardSuits[suit]}`);
        currentCard.on('click',function () {
            reverseCards();
        })
        container.append(currentCard)

        function reverseCards() {
            let cardsArr=Array.from($(selector).children());
            cardsArr.reverse();
            $(`${selector} *`).remove();
            for(let card of cardsArr){
                container.append($(card).on('click',reverseCards));
            }
        }

    }
    return {
        addCard
    }
}