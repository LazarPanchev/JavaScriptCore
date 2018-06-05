function jsonTable(strArr) {
    let result='<table>\n';
    for(let line of strArr){
        result+='\t<tr>\n';
        let currObj=JSON.parse(line);
        result+=`		<td>${currObj['name']}</td>\n`;
        result+=`		<td>${currObj['position']}</td>\n`;
        result+=`		<td>${currObj['salary']}</td>\n`;
        result+='\t</tr>\n';
    }
    result+='</table>';

    console.log(result);
}

jsonTable([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
]
);