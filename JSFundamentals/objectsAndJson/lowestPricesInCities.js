function lowestPrices(strArr){
    let map=new Map(); //product,town,price
    for(let line of strArr){
        let[town,product,price]=line.split(' | ');
        if(!map.has(product)){
            map.set(product, new Map());
        }
        map.get(product).set(town,Number(price));
    }

    // for(let [key,innerMap] of map){
    //     let lowestPrice=Number.POSITIVE_INFINITY;
    //     let cityLowestPrice='';
    //     for(let [innerKey,value] of innerMap){
    //         if(value<lowestPrice){
    //             lowestPrice=value;
    //             cityLowestPrice=innerKey;
    //         }
    //     }
    for(let [key,innerMap] of map){
        let sortedCitiesArr=Array.from(innerMap.keys()).sort((a,b)=>{
            return innerMap.get(a)-innerMap.get(b);
        });
        console.log(`${key} -> ${innerMap.get(sortedCitiesArr[0])} (${sortedCitiesArr[0]})`);
    }

}

lowestPrices( [
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);

// lowestPrices([
//     'Sofia City | Audi | 100000',
//     'Sofia City | BMW | 100000',
//     'Sofia City | Mitsubishi | 10000',
//     'Sofia City | Mercedes | 10000',
//     'Sofia City | NoOffenseToCarLovers | 0',
//     'Mexico City | Audi | 1000',
//     'Mexico City | BMW | 99999',
//     'New York City | Mitsubishi | 10000',
//     'New York City | Mitsubishi | 1000',
//     'Mexico City | Audi | 100000',
//     'Washington City | Mercedes | 1000'
// ]);