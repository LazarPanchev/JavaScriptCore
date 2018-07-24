class Player {
    constructor(nickname) {
        this.nickName = nickname;
        this.scores = [];
    }

    addScore(score) {
        let scoreAsNum = Number(score);
        if (!Number.isNaN(scoreAsNum)&& score!==null) {
            this.scores.push(scoreAsNum);
        }
        let sortedScores = this.scores.sort((a, b) => b - a);
        return this
    }

    get scoreCount() {
        return this.scores.length;
    }

    get highestScore() {
        return this.scores[0];
    }
    get topFiveScore(){

        return this.scores.slice(0,5);
    }
    toString(){
        if(this.scores.length===0){
            return `${this.nickName}: []`
        }else {
            let sortedScores = this.scores.sort((a, b) => b - a);
            return `${this.nickName}: [${sortedScores}]`;
        }
    }
}
let peter = new Player("Peter");
console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);
console.log('Score count: ' + peter.scoreCount);
peter.addScore(450);
peter.addScore(200);
console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);
peter.addScore(2000);
peter.addScore(300);
peter.addScore(50);
peter.addScore(700);
peter.addScore(700);
console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);
console.log('Score count: ' + peter.scoreCount);
console.log();
let maria = new Player("Maria")
    .addScore(350)
    .addScore(779)
    .addScore(180);
console.log('Highest score: ' + maria.highestScore);
console.log(`Top 5 score: [${maria.topFiveScore}]`);
console.log('' + maria);