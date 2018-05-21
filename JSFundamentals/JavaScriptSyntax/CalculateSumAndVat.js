function sumAndVat(arr) {
    let sum=0;
    for(let num of arr){
        sum+=num;
    }
    console.log("sum="+sum);
    console.log("VAT="+sum*0.20);
    console.log("total="+sum*1.20);
}

sumAndVat([
    1.20,
    2.60,
    3.50
]);