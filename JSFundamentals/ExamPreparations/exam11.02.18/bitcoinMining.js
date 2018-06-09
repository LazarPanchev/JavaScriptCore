function bitcoinMining(strArr) {
    strArr=strArr.map(Number);
    let totalMoney=0;
    let bitcoins=0;
    let totalBitcoins=0;
    let dayOfPurchase=0;
    let purchased=false;
    for(let i = 1; i <=strArr.length; i++){
        let gold=strArr[i-1];
        if(i%3===0){
            gold=(gold-(gold*0.3))
        }
        totalMoney+=gold* 67.51;
        if(totalMoney>=11949.16){
            bitcoins=Math.floor(totalMoney/11949.16);
            totalBitcoins+=bitcoins;
            if(!purchased){
                dayOfPurchase=i;
                purchased=true;
            }
            totalMoney-=(bitcoins)*11949.16;
        }

    }
    console.log(`Bought bitcoins: ${totalBitcoins}`);
    if(dayOfPurchase!==0){
        console.log(`Day of the first purchased bitcoin: ${dayOfPurchase}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

bitcoinMining(['100', '200', '300']);