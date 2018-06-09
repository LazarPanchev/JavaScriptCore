function arenaTier(strArr) {
    let mapPool=new Map();
    for(let line of strArr) {
        if(line==='Ave Cesar'){
            break;
        }
        let tokens = line.split(' -> ');
        if (tokens.length === 3) {
            let [gladiator, technique, skill] = tokens;
            skill = Number(skill);
            if (!mapPool.has(gladiator)) {
                mapPool.set(gladiator, new Map());
            }
            if(!mapPool.get(gladiator).has(technique)){
                mapPool.get(gladiator).set(technique, skill);
            }else {
                let oldValue = mapPool.get(gladiator).get(technique);
                if (skill > oldValue) {
                    mapPool.get(gladiator).set(technique, skill);
                }
            }

        } else { //vs
            tokens=line.split(' vs ');
            let [firstGladiator, secondGladiator]= tokens;
            if(isBothExist(firstGladiator,secondGladiator) &&
                haveTechnique(firstGladiator, secondGladiator)){
                let firstTotalSkill=Array.from(mapPool
                    .get(firstGladiator)
                    .values())
                    .reduce((a,b)=>a+b);
                let secondTotalSkill=Array.from(mapPool
                    .get(secondGladiator)
                    .values())
                    .reduce((a,b)=>a+b);
                if(firstTotalSkill>secondTotalSkill){
                    mapPool.delete(secondGladiator);
                }else if(secondTotalSkill>firstTotalSkill){
                    mapPool.delete(firstGladiator);
                }

            }

        }
    }

    let skillArr=Array.from(mapPool.keys()).sort(sorting);
    for(let currGladiator of skillArr){
        let techArr=Array.from(mapPool.get(currGladiator).keys())
            .sort((a,b)=>{
                let first=mapPool.get(currGladiator).get(a);
                let sec=mapPool.get(currGladiator).get(b);
                if(first>sec){
                    return -1;
                }else if(first<sec){
                    return 1;
                }else{
                    a.toLowerCase().localeCompare(b.toLowerCase());
                }
            });
        let currTotalSkill=Array.from(mapPool.get(currGladiator).values()).reduce((a,b)=>a+b);
        console.log(`${currGladiator}: ${currTotalSkill} skill`);
        for(let tech of techArr){
            console.log(`- ${tech} <!> ${mapPool.get(currGladiator).get(tech)}`);
        }
    }

    function secondSorting(a,b,c) {

    }

    function sorting(a,b) {
        let firstTotalSkill=Array.from(mapPool.get(a).values()).reduce((a,b)=>a+b);
        //console.log(firstTotalSkill);//.reduce((a,b)=>a[1]+b[1]);
        let secondTotalSkill=Array.from(mapPool.get(b).values()).reduce((a,b)=>a+b);
        if(firstTotalSkill>secondTotalSkill){
            return -1;
        }else if(firstTotalSkill<secondTotalSkill){
            return 1;
        }else{
            a.toLowerCase().localeCompare(b.toLowerCase());
        }
    }

    function isBothExist(first,second) {
        return mapPool.has(first) && mapPool.has(second);
    }
    function haveTechnique(first,second) {
        let firstTechniques=Array.from(mapPool.get(first).keys());
        let secondTechniques=Array.from(mapPool.get(second).keys());
        for(let tech of firstTechniques){
            for(let secTech of secondTechniques){
                if(tech===secTech){
                    return true;
                }
            }
        }
        return false;

    }

}
arenaTier([
    'Pesho -> BattleCry -> 400',
    'Gosho -> PowerPunch -> 300',
    'Stamat -> Duck -> 200',
    'Stamat -> Tiger -> 250',
    'Ave Cesar'
]);

arenaTier([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Gosho',
    'Ave Cesar'
]);