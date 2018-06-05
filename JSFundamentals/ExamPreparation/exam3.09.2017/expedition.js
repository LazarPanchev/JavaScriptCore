function expedition(primaryMatrix, secondaryMatrix, overlay, start) {

    for (let row = 0; row < overlay.length; row++) {
        let overLayRow = overlay[row][0];
        let overLayCol = overlay[row][1];
        primaryMatrix = overLaying(primaryMatrix, secondaryMatrix, overLayRow, overLayCol)
    }
    //console.log(primaryMatrix);
    isThereAExit(primaryMatrix, start[0], start[1]);


    function isThereAExit(primaryMatrix, startRow, startCol) {
        let counter = 0;
        let currentRow = startRow;
        let currentCol = startCol;
        let exit='';
        let noMoves=false;
        let noPrint=false;
        let noPath='';
        while(!noMoves) {
            if (primaryMatrix[currentRow-1]!==undefined &&(primaryMatrix[currentRow-1][currentCol] === 0)
                &&noPath!=='up' ) {
                noPath='down';
                counter++;
                currentRow=currentRow-1;
            }else if(primaryMatrix[currentRow+1][currentCol] === 0 && noPath!=='down'){
                noPath='up';
                counter++;
                currentRow=currentRow+1;
            }else if(currentCol>0 &&(primaryMatrix[currentRow][currentCol-1] === 0)&&
            noPath!=='left'){
                noPath='right';
                counter++;
                currentCol=currentCol-1;
            }else if((primaryMatrix[currentRow][currentCol+1] === 0)&&
            noPath!=='right'){
                counter++;
                noPath='left';
                currentCol=currentCol+1;
            }else {
                noMoves=true;
            }
            if(currentRow===primaryMatrix.length-1 && noMoves) {
                exit = 'Bottom';
                break;
            }else if(currentRow===0 && noMoves) {
                exit = 'Top';
                break;
            }else if(currentCol===0 && noMoves){
                exit ='Left';
                break;
            }else if(currentCol===primaryMatrix.length-1 && noMoves){
                exit = 'Right';
                break;
            }

            if(exit==='' && noMoves){
                console.log(counter);
                console.log('Dead end');
                if(currentRow>primaryMatrix.length/2 && currentCol>primaryMatrix.length/2){
                    console.log(4);
                }else if(currentRow>primaryMatrix.length/2 && currentCol<primaryMatrix.length/2){
                    console.log(3);
                }else if(currentRow<primaryMatrix.length/2 && currentCol>primaryMatrix.length/2){
                    console.log(1);
                }else{
                    console.log(2);
                }
                noPrint=true;
                break;
            }
        }
        if(!noPrint) {
            console.log(counter);
            console.log(exit);
        }


    }

    function overLaying(primaryMatrix, secondaryMatrix, row, col) {
        let startRow = Math.max(0, row);
        let endRow = Math.min(row + secondaryMatrix.length - 1, primaryMatrix.length - 1);
        let startCol = Math.max(0, col);
        let endCol = Math.min(col + secondaryMatrix.length - 1, primaryMatrix.length - 1);

        for (let currR = startRow; currR <= endRow; currR++) {
            for (let currC = startCol; currC <= endCol; currC++) {
                if ((primaryMatrix[currR][currC] === 1) && (secondaryMatrix[currR - row][currC - col] === 1)) {
                    primaryMatrix[currR][currC] = 0;
                } else if ((primaryMatrix[currR][currC] === 0) && (secondaryMatrix[currR - row][currC - col] === 1)) {
                    primaryMatrix[currR][currC] = 1;
                }
            }
        }
        return primaryMatrix

    }
}

expedition([
        [1, 1, 0, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 0, 1],
        [0, 0, 0, 1, 1, 0, 0, 1],
        [1, 0, 0, 1, 1, 1, 1, 1],
        [1, 0, 1, 1, 0, 1, 0, 0]
    ],
    [
        [0, 1, 1],
        [0, 1, 0],
        [1, 1, 0]
    ],
    [
        [1, 1],
        [2, 3],
        [5, 3]
    ],
    [0, 2]);

// expedition([[1, 1, 0, 1],
//         [0, 1, 1, 0],
//         [0, 0, 1, 0],
//         [1, 0, 1, 0]],
//     [[0, 0, 1, 0, 1],
//         [1, 0, 0, 1, 1],
//         [1, 0, 1, 1, 1],
//         [1, 0, 1, 0, 1]],
//     [[0, 0],
//         [2, 1],
//         [1, 0]],
//     [2, 0]);