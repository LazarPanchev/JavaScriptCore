function uncleScrooge(arr){
    //Every 100 coins make 1 gold, every 10 coins make 1 silver and 1 coin is 1 bronze.
    let totalCoins=0;
    for(let i = 0; i < arr.length; i++){
        let tokens=arr[i].split(' ');
        let coinName=tokens[0];
        let coinValue=Number(tokens[1]);
        if(isValidCoin(coinName,coinValue)){
            totalCoins+=coinValue;
        }
    }



    let bronze=(totalCoins%10);
    totalCoins=parseInt(totalCoins/10);
    let silver=(totalCoins%10);
    totalCoins=parseInt(totalCoins/10);
    let gold=totalCoins;
    console.log(`gold : ${gold}\nsilver : ${silver}\nbronze : ${bronze}`);

    function isValidCoin(coinName,coinValue) {
        if((coinName.toLowerCase()==='coin') && (parseInt(coinValue)===coinValue) &&
            (coinValue>0)){
            return true;
        }else {
            return false;
        }
    }



}

uncleScrooge(['coin 1','coin 2', 'coin 5', 'coin 10', 'coin 20', 'coin 50', 'coin 100', 'coin 200', 'coin 500','cigars 1']);
uncleScrooge(['coin one', 'coin two', 'coin five', 'coin ten', 'coin twenty', 'coin fifty', 'coin hundred', 'cigars 1']);
uncleScrooge(['coin 1', 'coin two', 'coin 5', 'coin 10.50', 'coin 20', 'coin 50', 'coin hundred', 'cigars 1']);
