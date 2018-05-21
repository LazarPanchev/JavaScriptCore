function prime(num) {
    if(num<=1){
        return false;
    }
    for (let i = 2; i <=Math.sqrt(num); i++) {
        if(num%i===0){
            return false;
        }

    }
    return true;
}

console.log(prime(7));
console.log(prime(8));
console.log(prime(81));
console.log(prime(-5));
console.log(prime(0));
console.log(prime(1));