function lastKNumberSequence(n,k){
    let nextNum=0;
    let result=[1];
    for(let i = 1; i < n; i++){
        nextNum=result.slice(Math.max(0,i-k)).reduce((a,b)=>a+b);
        result.push(nextNum);
    }
    return result.join(' ');
}

console.log(lastKNumberSequence(6, 3));
console.log(lastKNumberSequence(8, 2));