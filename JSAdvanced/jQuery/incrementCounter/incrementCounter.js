function increment(selector) {
    let textArea=$('<textarea>')
        .addClass('counter')
        .val(0)
        .attr('disabled',true);
    let firstBtn=$('<button>')
        .addClass('btn')
        .attr('id','incrementBtn')
        .text('Increment');
    let secondBtn=$('<button>')
        .addClass('btn')
        .attr('id','addBtn')
        .text('Add');
    let list=$('<ul>').addClass('results');
    textArea.appendTo($(selector));
    $(selector).append(firstBtn);
    $(selector).append(secondBtn);
    list.appendTo($(selector));

    $(firstBtn).on('click',function () {
        textArea.val(+textArea.val()+1);
    });
    $(secondBtn).on('click',function () {
        let li=$(`<li>${textArea.val()}</li>`);
        list.append(li)
    });
}