function aggregate(arr) {
    let towns=[];
    let sum=0;
    for(let data of arr){
        let tokens=data.split('|').filter(x=>x!=='');
        towns.push(tokens[0].trim());
        sum+=Number(tokens[1]);
    }

    console.log(towns.join(', '));
    console.log(sum);
    
}

aggregate(['| Sofia | 300',
    '| Veliko Tarnovo | 500',
    '| Yambol | 275']);