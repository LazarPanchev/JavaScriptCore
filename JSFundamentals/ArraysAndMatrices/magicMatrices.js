function magicMatrices(matrix) {
    let compareSum=0;
    let equalSums='';
    for(let row = 0; row < matrix.length; row++){
        let rowSum=0;
        let colSum=0;
        for(let col = 0; col < matrix[row].length; col++){
            rowSum+=matrix[row][col];
            if(row===0){
                compareSum=rowSum;
            }
            if(matrix[col] !== undefined){
                colSum+=matrix[col][row];
            }
        }
        if((rowSum!==compareSum) || (colSum!==compareSum)){
            return false;
        }
    }
    return true;
}

console.log(magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]));
console.log(magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]));
console.log(magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
]));