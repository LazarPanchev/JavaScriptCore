function calcDistance(x1,y1,x2,y2) {
    let point1={x:x1,y:y1};
    let point2={x:x2,y:y2};

    //use the Pythagorean theorem to calculate the distance
    //first part
    let calcFirstPoint=Math.pow(point2.x-point1.x,2);
    //second part
    let calcSecondPoint=Math.pow(point2.y-point1.y,2);
    //third part
    let distance=Math.sqrt(calcFirstPoint+calcSecondPoint);
    console.log(distance)
}

calcDistance(2.34, 15.66, -13.55, -2.9985)