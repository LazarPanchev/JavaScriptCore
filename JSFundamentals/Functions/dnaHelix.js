function dnaHelix(num) {
    let result='';
    let strIndex=0;
    let fourStars=(let1,let2)=>`**${let1}${let2}**\n`;
    let twoStars=(let1,let2)=>`*${let1}--${let2}*\n`;
    let withoutStars=(let1,let2)=>`${let1}----${let2}\n`;
    for(let i = 0; i <num; i++){
        result+=addLetter(i,strIndex);
        strIndex+=2;
        if(strIndex % 10===0){
            strIndex=0;
        }
    }

    console.log(result);


    function addLetter(index,strIndex) {
        let currentResult='';
        let str='ATCGTTAGGG';
        if(index%2===1){
            currentResult+=twoStars(str[strIndex],str[strIndex+1]);

        }else if(index%4===0){
            currentResult+=fourStars(str[strIndex],str[strIndex+1]);
        }else {
            currentResult+=withoutStars(str[strIndex],str[strIndex+1]);
        }
        return currentResult;
    }
}

dnaHelix(10);