function heroicInventory(strArr) {
    let resultArr=[];
    for(let line of strArr){
        let tokens=line.split(' / ').filter(x=>x!=='');
        let name=tokens[0];
        let level=Number(tokens[1]);
        let items=[];
        if(tokens.length>2) {
            items = tokens[2].split(', ');
        }
        let currObj={name:name, level:level,items:items};
        resultArr.push(currObj);
    }
    console.log(JSON.stringify(resultArr));

}

heroicInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);

heroicInventory([
    'Jake / 1000 / Gauss, HolidayGrenade'
]);

heroicInventory([
    'Jake /  1000 / '
]);