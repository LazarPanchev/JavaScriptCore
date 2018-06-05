function autoEngineeringCompany(strArr) {
    let map=new Map();
    for (let line of strArr){
        let [carBrand,carModel,producedCars]=line.split(/\s\|\s/g);
        producedCars=Number(producedCars);
        if(!map.has(carBrand)){
            map.set(carBrand,new Map());
        }

        if(!map.get(carBrand).has(carModel)){
            map.get(carBrand).set(carModel,producedCars);
        }else{
            let oldValue=map.get(carBrand).get(carModel);
            map.get(carBrand).set(carModel,oldValue+producedCars);
        }
    }

    for(let [key,innerMap] of map){
        console.log(key);
        for(let [innerKey,value] of innerMap){
            console.log(`###${innerKey} -> ${value}`);
        }
    }
}

autoEngineeringCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);