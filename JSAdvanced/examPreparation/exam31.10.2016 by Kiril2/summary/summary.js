 function attachEvent(selector) {
    let targetBtn=$(selector);
    targetBtn.on('click',function () {
        let boldText=$('#content p strong').text();
        let container=$('#content').parent();
        let summary=$('<div>');
        summary.attr('id',"summary");
        let headingParagraph=$('<h2>').text('Summary');
        summary.append(headingParagraph);
        let divText=$('<p>').text(boldText);
        summary.append(divText);
        container.append(summary);
    })
}