function deckOfCards(arr) {
    let result=[];
    for(let i = 0; i < arr.length; i++){
        let currCard=arr[i];
        let card=currCard.substring(0,currCard.length-1);
        let suit=currCard.substring(currCard.length-1);
        let generatedCard;
        try{
            generatedCard=generateCards(card,suit);
        }catch (err){
            console.log('Invalid card: '+ card+suit);
            return;
        }
        result.push(generatedCard.card+generatedCard.suit);
    }
    console.log(result.join(' '));

    function generateCards(card,suit) {
        let validCards=['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let validSuits={
            S:'\u2660',
            H:'\u2665',
            D:'\u2666',
            C:'\u2663',
        };
        if(!validCards.includes(card)){
            throw new Error('Invalid card:')
        }
        if(!validSuits.hasOwnProperty(suit)){
            throw new Error('Invalid suit:')
        }
        return {
            card:card,
            suit:validSuits[suit],
            toString:function () {
                return this.card+validSuits[this.suit];
            }
        }

    }
}

deckOfCards(['AS','10D','KH','2C']);
deckOfCards(['5S','3D','QD','1C']); //invalidCard



