function printAnArray(arr) {
    let delimiter=arr.pop();
    console.log(arr.join(delimiter));
    
}

printAnArray([
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-'
]);
printAnArray([
    'How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!',
    '_'
]);