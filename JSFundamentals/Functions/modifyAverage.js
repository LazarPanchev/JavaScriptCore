function modifyAverage(num) {
    let sum=0;

    let numAsStr=num.toString();
    sum=sumDigits(numAsStr);
    let average=sum/(numAsStr.length);
    while(average<=5){
        numAsStr+='9';
        average=sumDigits(numAsStr)/(numAsStr.length);
    }
    return numAsStr;

    function sumDigits(n) {
        let currentSum=0;
        for(let i = 0; i < n.length; i++){
            currentSum+=Number(n[i]);
        }

        return currentSum;

    }

}

console.log(modifyAverage(101));
console.log(modifyAverage(5835));
console.log(modifyAverage(0));
console.log(modifyAverage(1));
console.log(modifyAverage(55));