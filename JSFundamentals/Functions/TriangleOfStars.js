function triangleOfStars(num) {
    for(let i = 1; i <=num; i++){
        console.log("*".repeat(i));
    }
    for(let i = num-1; i >=0; i--){
        console.log("*".repeat(i));
    }
}

triangleOfStars(3);
triangleOfStars(5);
triangleOfStars(7);