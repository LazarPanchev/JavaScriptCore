function diagonalAttack(matrixAsString) {
    let matrix = matrixAsString.map(row => row.split(" ").map(Number));
    let normalSum = 0;
    let backSum = 0;
    for (let row = 0; row < matrix.length; row++) {
        normalSum += matrix[row][row];
        backSum += matrix[row][matrix[row].length - 1 - row];
    }

    if (normalSum === backSum) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if ((row !== col) && (row+col!==matrix.length-1)) {
                    matrix[row][col] = normalSum;
                }
            }
        }
    }

    matrix.forEach(row => console.log(row.join(' ')));
}

diagonalAttack([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
]);
diagonalAttack([
     '1 1 1',
     '1 1 1',
     '1 1 0'
]);