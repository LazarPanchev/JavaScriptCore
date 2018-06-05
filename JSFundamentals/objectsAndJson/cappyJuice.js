function cappyJuice(dataRows) {
    let flavourObj = {};
    let bottleObj = {};
    for(let dataRow of dataRows){
        let dataRowInfo =dataRow.split(/\s=>\s/g);
        let[juiceName, juiceQuantity]=[dataRowInfo[0], Number(dataRowInfo[1])];
        flavourObj[juiceName]=flavourObj.hasOwnProperty(juiceName)
            ? flavourObj[juiceName] + juiceQuantity : juiceQuantity;
        if(flavourObj[juiceName] >= 1000){
            bottleObj[juiceName] =Math.floor(flavourObj[juiceName] /1000);
        }
    }

    for(let juiceName in bottleObj){
        console.log(`${juiceName} => ${bottleObj[juiceName]}`);
    }

}

cappyJuice([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);