function diagonalSum(matrix){
    let mainDiagonal=0;
    let secondaryDiagonal=0;
    for(let row = 0; row < matrix.length; row++){
        mainDiagonal+=matrix[row][row];
        secondaryDiagonal+=matrix[row][matrix[row].length-1-row];
    }
    console.log(mainDiagonal+' '+secondaryDiagonal);
}

diagonalSum([
    [3,5,17],
    [-1,7,14],
    [1,-8,89],
]);