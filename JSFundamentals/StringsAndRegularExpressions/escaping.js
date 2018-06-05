function escaping(arr) {
    let result='<ul>\n';
    for(let line of arr){
        result+='  <li>'+`${line
            .replace(/&/g,'&amp;')
            .replace(/</g,'&lt;')
            .replace(/>/g,'&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g,'&#39;')}`;
        result+='</li>\n';
    }
    result+='</ul>';
    return result;
}

console.log(escaping(['<b>unescaped text</b>', 'normal text']));
//escaping(['<div style=\"color: red;\">Hello, Red!</div>', '<table><tr><td>Cell 1</td><td>Cell2</td><tr>']);