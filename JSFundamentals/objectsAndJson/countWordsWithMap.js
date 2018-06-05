function countWordsWithMap(strArr) {
    let result=new Map();
    let textArr=strArr.join('\n').toLowerCase().split(/[\W+]/).filter(x=>x!=='');
    for(let word of textArr){
        if(!result.has(word)){
            result.set(word,1)
        }else {
            result.set(word,result.get(word)+ 1);
        }
    }

    let mapArr=Array.from(result.keys()).sort();

    for(let key of mapArr){
        console.log(`'${key}' -> ${result.get(key)} times`);
    }
}
countWordsWithMap(["Far too slow, you're far too slow."]);