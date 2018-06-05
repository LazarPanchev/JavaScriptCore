function cityMarkets(strArr) {
    let mapRessult=new Map();
    for(let data of strArr){
        let[town,product,quantityPrice]=data.split(' -> ');
        let[sales,price]=quantityPrice.split(' : ').map(Number);

        if(!mapRessult.has(town)){
            mapRessult.set(town,new Map());
        }
        if(!mapRessult.get(town).has(product)){
            mapRessult.get(town).set(product,0);
        }
        let oldValue=mapRessult.get(town).get(product);
        mapRessult.get(town).set(product,oldValue+sales*price);
    }


    for(let [key,map] of mapRessult){
        console.log(`Town - ${key}`);
        for(let [key,value] of map){
            console.log(`$$$${key} : ${value}`);
        }
    }

}
cityMarkets([
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'
]);