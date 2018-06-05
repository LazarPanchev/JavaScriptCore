function countWordsInAText(strArr) {
//First method
    // let obj={};
    // for(let data of strArr){
    //     let wordsArr=data.split(/[\W+]/).filter(x=>x!=='');
    //     for(let word of wordsArr){
    //         if(!obj.hasOwnProperty(word)){
    //             obj[word]=0;
    //         }
    //         obj[word]++;
    //     }
    // }
    // console.log(JSON.stringify(obj));

//Second method
    let resultObj={};
    let result=strArr
        .join('\n')
        .split(/[\W+]/)
        .filter(x=>x!=='')
        .forEach(word=> {
            return resultObj.hasOwnProperty(word)? resultObj[word]++:resultObj[word]=1
        });
    console.log(JSON.stringify(resultObj));
}

countWordsInAText([
    "Far too slow, you're far too slow."
]);