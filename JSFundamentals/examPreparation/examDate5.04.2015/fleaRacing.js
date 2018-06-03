function fleaRacing(arr){
    let allowedJumps=Number(arr[0]);
    let trackLenght=Number(arr[1]);
    let matrixResult=[];

    for(let i = 2; i < arr.length; i++){
        let tokens=arr[i].split(', ');
        let fleaName=tokens[0];
        let jumps=Number(tokens[1]);
        tokens.push(0);
        matrixResult.push(tokens);
    }
    let winnerIndex=-1;
    for(let i = 0; i < allowedJumps; i++){
        for(let j = 0; j < matrixResult.length; j++) {
            let currentFlea = j % matrixResult.length;
            matrixResult[currentFlea][2] += Number(matrixResult[currentFlea][1]);
            if (matrixResult[currentFlea][2] >= trackLenght-1) {
                winnerIndex = currentFlea;
                break;
            }
        }
        if(winnerIndex!==-1){
            break;
        }
    }

    if(winnerIndex!==-1){
        printResult();
        console.log('Winner: '+ matrixResult[winnerIndex][0]);
    }else{
        let bestLenght=0;
        let bestFleaIndex=0;
        for(let i = 0; i < matrixResult.length; i++){
            let currentLenght=matrixResult[i][2];
            if(currentLenght>=bestLenght){
                bestLenght=currentLenght;
                bestFleaIndex=i;
            }
        }
        printResult();
        console.log('Winner: '+matrixResult[bestFleaIndex][0]);
    }

    function printResult() {
        console.log('#'.repeat(trackLenght));
        console.log('#'.repeat(trackLenght));
        for(let i = 0; i < matrixResult.length; i++){
            let position=matrixResult[i][2];
            let fleaName=matrixResult[i][0];
            let letter=fleaName[0].toUpperCase();
            if(position>trackLenght-1){
                position=trackLenght-1;
            }
            console.log('.'.repeat(position)+letter+'.'.repeat((trackLenght-1)-position));
        }
        console.log('#'.repeat(trackLenght));
        console.log('#'.repeat(trackLenght));
    }

}

fleaRacing([ '10', '19', 'angel, 9', 'Boris, 10', 'Georgi, 3', 'Dimitar, 7' ]);
fleaRacing([ '3', '5', 'cura, 1', 'Pepi, 1', 'UlTraFlee, 1', 'BOIKO, 1' ]);
fleaRacing([ '3', '5', 'cura, 10', 'Pepi, 1', 'UlTraFlee, 1', 'BOIKO, 1' ]);