function storeCatalogue(strArr){
    let priceList={};
    for(let line of strArr){
        let[product,price]=line.split(/\s:\s/g);
        priceList[product]=price;
    }

    let keys=Object.keys(priceList).sort();
    let lastLetter=keys[0].charAt(0);
    console.log(lastLetter);
    for(let item of keys){
        let currentFirstLetter=item.charAt(0);
        if(currentFirstLetter!==lastLetter){
            lastLetter=currentFirstLetter;
            console.log(currentFirstLetter);
        }
        console.log(`  ${item}: ${priceList[item]}`);
    }

}

storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);

storeCatalogue([
    'Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10',
]);