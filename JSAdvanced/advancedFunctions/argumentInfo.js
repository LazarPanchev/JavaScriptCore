function argumentInfo () {
    let map=new Map();
    for(let i = 0; i < arguments.length; i++){
        let type=typeof (arguments[i]);
        if(!map.has(type)){
            map.set(type,0)
        }
        let oldValue=map.get(type);
        map.set(type,oldValue+1);
        console.log(`${type}: ${arguments[i]}`);
    }
    [...map].sort((a,b)=>b[1]-a[1])
        .forEach(x=>console.log(`${x[0]} = ${x[1]}`));
}

argumentInfo('cat', 42,54, function () { console.log("Hello world!")});