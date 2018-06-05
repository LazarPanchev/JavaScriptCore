function jsonToHtmlTable(input) {
    let strArr=JSON.parse(input);
    let resultHtml='<table>\n';
    resultHtml+='   <tr>';
    for(let key in strArr[0]){
        resultHtml+=`<th>${escapeHtml(key)}</th>`;
    }
    resultHtml+='</tr>\n';
    for(let row of strArr) {
        resultHtml+='   <tr>';
        for (let data in row) {
            resultHtml += `<td>${escapeHtml(row[data])}</td>`
        }
        resultHtml += '</tr>\n';
    }
    resultHtml+='</table>';
    console.log(resultHtml);

    function escapeHtml(text) {
        text=text.toString();
        return text.replace(/&/g,'&amp;')
            .replace(/</g,'&lt;')
            .replace(/>/g,'&gt;')
            .replace(/"/g,'&quot;')
            .replace(/'/g,'&#39;')

    }
}

jsonToHtmlTable('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]');