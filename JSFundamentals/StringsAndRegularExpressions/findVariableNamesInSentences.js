function findVariableNames(str) {
    let result=[];
    let regex=/\b_([A-Za-z0-9]+)\b/g;
        let match=regex.exec(str);
        while(match !==null){
            result.push(match[1]);
            match=regex.exec(str);
        }
    console.log(result.join(','));
}

findVariableNames('The _id and _age variables are both integers.');
findVariableNames('Calculate the _area of the _perfectRectangle object.');
findVariableNames('__invalidVariable _evenMoreInvalidVariable_ _validVariable');