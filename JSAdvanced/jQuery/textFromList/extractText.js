function extractText() {
    //let result=$('#items li').toArray().map((el)=>el.textContent).join(', ');
    let result=[];
    $("#items li").each((index,el)=>result.push($(el).text()));
    $("#result").text(result.join(', '));

}