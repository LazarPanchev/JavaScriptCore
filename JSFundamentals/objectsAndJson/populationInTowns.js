function populationInTowns(strArr) {
    let mapResult=new Map();
    for(let data of strArr){
        let [town,population]=data.split(' <-> ');
        if(!mapResult.has(town)){
            mapResult.set(town,0)
        }
            mapResult.set(town, mapResult.get(town) + Number(population));

    }

    for(let[key,value] of mapResult){
        console.log(`${key} : ${value}`);
    }
    
}

// populationInTowns(['Sofia <-> 1200000',
//     'Montana <-> 20000',
//     'New York <-> 10000000',
//     'Washington <-> 2345000',
//     'Las Vegas <-> 1000000']);

populationInTowns([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]);