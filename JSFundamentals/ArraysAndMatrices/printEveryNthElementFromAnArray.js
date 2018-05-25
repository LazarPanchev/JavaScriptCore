function printNthElement(arr) {
    let step=Number(arr.pop());
    for(let i = 0; i < arr.length; i+=step){
        console.log(arr[i]);
    }
    
}

printNthElement([
    '5','20','31','4','20','2'
]);
printNthElement([
    'dsa','asd','test','tset','2'
]);
printNthElement([
    '1','2','3','4','5','6'
]);