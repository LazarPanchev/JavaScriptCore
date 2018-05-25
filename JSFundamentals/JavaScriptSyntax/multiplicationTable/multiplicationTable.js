function multiplicationTable(num) {
    let result='<table border="1">\n';
    result+="<tr><th>x</th>";
    for(let i=1; i <= num; i++){
        result+=`<th>${i}</th>`;
    }
    result+="</tr>\n";
    for (let i = 1; i <=num; i++) {
        result+='<tr>';
        result+=`<th>${i}</th>`;
        for (let j = 1; j <=num; j++){

            result+=`<td>${j*i}</td>`;
        }
        result+='</tr>\n';
    }
    result+='</table>';
    return result;

}

console.log(multiplicationTable(5));