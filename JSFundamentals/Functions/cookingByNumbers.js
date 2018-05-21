function cookingByNums(arr) {
    let number=Number(arr[0]);
    let chop =(n) => n/2;
    let dice =(n) => Math.sqrt(n);
    let spice = (n) => ++n;
    let bake = (n) => n*3;
    let fillet = (n) => n-=(n*0.2);

    for(let i = 1; i < arr.length; i++){
        switch (arr[i]){
            case "chop":
                console.log(number = chop(number));
                break;
            case "dice":
                console.log(number = dice(number));
                break;
            case "spice":
                console.log(number = spice(number));
                break;
            case "bake":
                console.log(number = bake(number));
                break;
            case "fillet":
                console.log(number = fillet(number));
                break;
        }
    }
}

cookingByNums([32, "chop", "chop", "chop", "chop", "chop"]);
cookingByNums([9,'dice', 'spice', 'chop', 'bake', 'fillet']);