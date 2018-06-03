function expressionSplit(str){
    // let regex=/[^\s,;()\.]+/g;
    // let result=str.match(regex);
    // console.log(result.join('\n'));
    let elements=str.split(/[\s.();,]+/);
    console.log(elements.join('\n'));

}

expressionSplit('let sum = 4 * 4,b = "wow";');
expressionSplit('let sum = 1 + 2;if(sum > 2){\\tconsole.log(sum);}');