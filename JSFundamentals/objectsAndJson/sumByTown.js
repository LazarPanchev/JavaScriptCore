function sumsByTown(strArr) {
    let result={};
    for(let i = 0; i < strArr.length; i+=2){
        let town=strArr[i];
        let income=strArr[i+1];
        if(result[town]===undefined){
        //if(!result.hasOwnProperty(town)){
            result[town]=Number(income);
        }else{
            result[town]+=Number(income);
        }
    }
    console.log(JSON.stringify(result));

}

sumsByTown([
    'Sofia',
    '20',
    'Varna',
    '3',
    'Sofia',
    '5',
    'Varna',
    '4'
]);
sumsByTown([
    'Sofia',
    '20',
    'Varna',
    '3',
    'sofia',
    '5',
    'varna',
    '4'
]);
