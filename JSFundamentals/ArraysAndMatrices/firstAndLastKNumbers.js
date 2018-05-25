function firstAndlastKNumbers(arr) {
    let kElements=arr.shift();
    console.log(arr.slice(0,kElements).join(' '));
    //console.log(arr.slice(-kElements).join(' '));
    console.log(arr.slice(arr.length-kElements).join(' '));
}

firstAndlastKNumbers([2,7,8,9]);
firstAndlastKNumbers([3,6,7,8,9]);