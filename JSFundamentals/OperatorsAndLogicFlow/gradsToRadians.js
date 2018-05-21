function gradsToDegree(num) {
    let degree=num%400*0.9;
    if(num<0){
        degree=360+degree;
    }
    console.log(degree);
}

gradsToDegree(100);
gradsToDegree(400);
gradsToDegree(850);
gradsToDegree(-50);