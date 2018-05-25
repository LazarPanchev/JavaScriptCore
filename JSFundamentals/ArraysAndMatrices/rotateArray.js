function rotateArray(arr) {
    let rotations=Number(arr.pop());
    rotations%=arr.length;
    for(let i = 0; i < rotations; i++){
        let tempElement=arr[arr.length-1];
        arr.pop();
        arr.unshift(tempElement);
    }
    console.log(arr.join(' '));
}

rotateArray([
    '1',
    '2',
    '3',
    '4',
    '2'
]);
rotateArray([
    'Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15'
]);