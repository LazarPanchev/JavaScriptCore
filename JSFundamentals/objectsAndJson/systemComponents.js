function systemComponents(strArr) {
    let map=new Map();
    for(let line of strArr){
        let[systemName,componentsName,subcomponentsName]=
        line.split(/\s\|\s/g);

        if(!map.has(systemName)){
            map.set(systemName,new Map())
        }
        if(!map.get(systemName).has(componentsName)){
            map.get(systemName).set(componentsName,[]);

        }
        map.get(systemName).get(componentsName).push(subcomponentsName);
    }

    let sortedArrSystem = Array.from(map.keys()).sort(sortingSystem);
    for(let system of sortedArrSystem){
        console.log(system);
        let sortedArrComponents=
            Array.from(map.get(system).keys()).sort((a,b)=>{
              return  map.get(system).get(b).length
                -map.get(system).get(a).length
            });
        for(let components of sortedArrComponents){
            console.log(`|||${components}`);
            map.get(system).get(components).forEach(x=>console.log(`||||||${x}`));
        }
    }

    function sortingSystem(a,b) {
        if(map.get(a).size>map.get(b).size){
            return -1;
        }else if(map.get(a).size<map.get(b).size){
            return 1;
        }else{
            return (a).localeCompare(b);
        }
    }
}

systemComponents([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);