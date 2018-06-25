function travelTime(strArr) {
    let map=new Map();
    for(let line of strArr){
        let [country, town , price]=line.split(' > ');
        price=Number(price);
        town = town.replace(town[0], town[0].toUpperCase());
        if(!map.has(country)){
            map.set(country,new Map());
        }
        if(!map.get(country).has(town)){
            map.get(country).set(town,price)
        }else{
            let oldPrice=map.get(country).get(town);
            if(price<oldPrice){
                map.get(country).set(town,price)
            }
        }
    }

    let countrySorted=Array.from(map.keys()).sort((a,b)=>a.localeCompare(b));
    for(let currCountry of countrySorted ){
        let result='';
        let resultTowns=[];
        result+=`${currCountry} -> `;
        let sortedTowns=Array.from(map.get(currCountry).keys()).sort((a,b)=>{
            return map.get(currCountry).get(a)-map.get(currCountry).get(b);
        });
        for (let currTown of sortedTowns){
            resultTowns.push(`${currTown} -> ${map.get(currCountry).get(currTown)}`)
        }
        console.log(result+resultTowns.join(' '));
    }
}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200" ]
);

travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Aarna > 25010',
    'Bulgaria > Lukovit > 10'
]);