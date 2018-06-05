function townsToJSON(strArr){
    let info=strArr.shift();
    let result=[];

    for(let line of strArr){
        let tokens=line.split(/\s*\|\s*/).filter(x=>x!=='');
        let[town,latitude,longitude]=tokens;
        let townObj={Town:town,Latitude:Number(latitude),Longitude:Number(longitude)};
        result.push(townObj);
    }

    return JSON.stringify(result);

}

console.log(townsToJSON(
    [
        '| Town | Latitude | Longitude |',
        '| Sofia | 42.696552 | 23.32601 |',
        '| Beijing | 39.913818 | 116.363625 |'
    ]
));
