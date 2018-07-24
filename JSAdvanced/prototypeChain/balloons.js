function solve() {
    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }

    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLenght) {
            super(color, gasWeight);
            this.ribbon = {color:ribbonColor,length:ribbonLenght};
        };

        get _ribbon() {
            return this.ribbon;
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLenght, text) {
            super(color, gasWeight, ribbonColor, ribbonLenght);
            this.text = text;
        }
    }
    return {
        Balloon:Balloon,
        PartyBalloon:PartyBalloon,
        BirthdayBalloon:BirthdayBalloon
    }
}

let result=solve();
let Balloon=result.Balloon
let BirthdayBalloon=result.BirthdayBalloon;
let PartyBalloon=result.PartyBalloon;
let ordinaryBalloon=new Balloon('green',0.5);
let partyBalloon=new PartyBalloon('red',0.6,'orange',1.5);
partyBalloon.ribbonColor='dark blue';
partyBalloon.ribbonLenght=0.1;
let birthdayBalloon=new BirthdayBalloon('yellow',1.2,'black',2.2,'Happy Birthday');
console.log(ordinaryBalloon);
console.log(partyBalloon);
console.log(birthdayBalloon);

