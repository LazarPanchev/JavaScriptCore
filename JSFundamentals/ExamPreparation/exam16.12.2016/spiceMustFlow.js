function spiceMustFlow(arr){
    let yieldSource=Number(arr[0]);
    let spice=0;
    let days=0;
    let totalSpice=0;
    while(yieldSource>=100){
        spice+=yieldSource-26;
        yieldSource-=10;
        days++;
    }
    if(spice>=26) {
        spice -= 26;
    }
    console.log(days);
    console.log(spice);
}

spiceMustFlow([111]);
spiceMustFlow([450]);
spiceMustFlow([200]);