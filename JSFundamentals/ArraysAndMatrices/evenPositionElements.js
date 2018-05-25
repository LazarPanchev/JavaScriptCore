function evenPosition(arr) {
    return arr.filter((n,i)=>i%2===0).join(' ');

}

//console.log(evenPosition(['20', '30', '40']));
console.log(evenPosition(['5', '10']));
console.log(evenPosition(['JS']));