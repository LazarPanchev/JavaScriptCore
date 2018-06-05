function scoreToHTML(jsonStr){

    let result='<table>\n';
    result+='   <tr><th>name</th><th>score</th></tr>\n';
    let obj=JSON.parse(jsonStr);
    for(let currObj of obj){
        result+=`   <tr><td>${escapeHtml(currObj['name'])}</td><td>${currObj['score']}</td></tr>\n`;
    }
    result+='</table>';
    return result;
    function escapeHtml(text) {
        return text.replace(/&/g,'&amp;')
            .replace(/</g,'&lt;')
            .replace(/>/g,'&gt;')
            .replace(/"/g,'&quot;')
            .replace(/'/g,'&#39;')

    }
}

console.log(scoreToHTML('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]'));
console.log(scoreToHTML('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]'));