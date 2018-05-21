function validityChecker(arr) {
    let x=0;
    let y=0;
    let x1=arr[0];
    let y1=arr[1];
    let x2=arr[2];
    let y2=arr[3];

    pointDistance(x1,y1,x,y);
    pointDistance(x2,y2,x,y);
    pointDistance(x1,y1,x2,y2,);

    function pointDistance(x1,y1,x,y) {
        let distancePart1=Math.pow(x1-x,2);
        let distancePart2=Math.pow(y1-y,2);
        let totalDistance= Math.sqrt(distancePart1+distancePart2);
        if(Number.isInteger(totalDistance)){
            console.log(`{${x1}, ${y1}} to {${x}, ${y}} is valid`);
        }else{
            console.log(`{${x1}, ${y1}} to {${x}, ${y}} is invalid`);
        }
    }
}

validityChecker([3, 0, 0, 4]);
validityChecker([2, 1, 1, 1]);