function airPollution(mapArr,strArr) {
    let matrix=[];
    for(let line of mapArr){
        matrix.push(line.split(' ').map(Number))
    }
    for(let line of strArr){
        let[force,index]=line.split(' ');
        index=Number(index);
        switch(force){
            case 'breeze':
                for(let row = 0; row < matrix.length; row++){
                    for(let col = 0; col < matrix[row].length; col++){
                        if(row===index && matrix[row][col]-20>=0){
                            matrix[row][col]=matrix[row][col]-15;
                        }
                    }
                }
                break;
            case 'gale':
                for(let row = 0; row < matrix.length; row++){
                    for(let col = 0; col < matrix[row].length; col++){
                        if(col===index && matrix[row][col]-20>=0){
                            matrix[row][col]=matrix[row][col]-20;
                        }
                    }
                }
                break;
            case 'smog':
                for(let row = 0; row < matrix.length; row++){
                    for(let col = 0; col < matrix[row].length; col++){
                        matrix[row][col]=matrix[row][col]+index;
                    }
                }
                break;
            default:
                break;
        }
    }

    let pollutionAreas=[];
    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[row].length; col++){
            if(matrix[row][col]>=50) {
                pollutionAreas.push(`[${row}-${col}]`);
            }
        }
    }
    if(pollutionAreas.length===0) {
        console.log('No polluted areas');

    }else {
        console.log(`Polluted areas: ${pollutionAreas.join(', ')}`);
    }
}

airPollution([
        "5 7 72 14 4",
        "41 35 37 27 33",
        "23 16 27 42 12",
        "2 20 28 39 14",
        "16 34 31 10 24",
    ],
    ["breeze 1", "gale 2", "smog 25"]
);
airPollution([
        "5 7 3 28 32",
        "41 12 49 30 33",
        "3 16 20 42 12",
        "2 20 10 39 14",
        "7 34 4 27 24",
    ],
    [
        "smog 11", "gale 3",
        "breeze 1", "smog 2"
    ])