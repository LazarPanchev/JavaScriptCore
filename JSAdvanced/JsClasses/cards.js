let cards=(function () {
    let validFaces=['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    let Suits={
        SPADES:'\u2660',
        HEARTS:'\u2665',
        DIAMONDS:'\u2666',
        CLUBS:'\u2663'
    };
    class Card{
        constructor(face,suit){
            this.face=face;
            this.suit=suit
        }
        get face(){
            return this._face;
        }
        set face(newFace){
            if(!validFaces.includes(newFace)){
                throw new Error('Invalid face!')
            }
            this._face=newFace
        }
        get suit(){
            return this._suit;
        }
        set suit(newSuit){
            if(!Object.values(Suits).includes(newSuit)){
                throw new Error('Invalid suit!')
            }
            this._suit=newSuit;
        }
        toString(){
            return this._face+this._suit;
        }
    }

    return {
        Card,
        Suits
    }
    
})();
let result=cards;
let Card=result.Card;
let Suits=result.Suits;
let card=new Card('Q',Suits.CLUBS);
console.log(card);
console.log(card.toString());
card.face='A';
card.suit=Suits.DIAMONDS;
let card2=new Card('1', Suits.DIAMONDS); //throw an error!