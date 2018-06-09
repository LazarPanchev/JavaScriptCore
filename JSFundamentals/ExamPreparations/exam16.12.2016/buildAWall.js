function buildWall(arr) {
    let wall=arr.map(Number);
    let days=0;
    let currentConcrete=0;
    let totalConcrete=0;
    let result=[];

    while(true) {
        let stopedWorkers=0;
        let workingParts=0;
        for (let i = 0; i < wall.length; i++) {
            if (wall[i] < 30) {
                wall[i]++;
                workingParts++;
            }else{
                stopedWorkers++;
            }
        }
        days++;
        if(stopedWorkers===arr.length){
            break;
        }
        currentConcrete=workingParts*195;
        totalConcrete+=currentConcrete;
        result.push(currentConcrete);
    }
    console.log(result.join(', '));
    console.log(totalConcrete*1900 + ' pesos');
}

buildWall([ '21', '25', '28' ]);
buildWall([ '17' ]);
buildWall([ '17', '22', '17', '19', '17' ]);