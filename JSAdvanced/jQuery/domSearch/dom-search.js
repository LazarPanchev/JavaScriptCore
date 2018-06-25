function domSearch(selector, caseType) {
    let addControls = $('<div>')
        .addClass('add-controls')
        .append($('<label>')
            .text('Enter text:')
            .append($('<input>')))
        .append(($('<a>')
            .text('Add'))
            .css('display', 'inline-block')
            .addClass('button')
            .on('click', addNewItem));

    function addNewItem() {
        let inputText = $('.add-controls input');
        let newElement = $('<li>')
            .addClass('list-item')
            .append($('<a>')
                .addClass('button')
                .text("X")
                .on('click', function () {
                    $(this).parent().remove();
                }))
            .append($('<strong>')
                .text(inputText.val().trim()));
        $('ul.items-list')
            .append(newElement);
        inputText.val('');
    }

    let searchControls = $('<div>')
        .addClass('search-controls')
        .append($('<label>')
            .text('Search:')
            .append($('<input>')
                .on('input', searchItem)));

    function searchItem() {
        let searchingText = $(this).val();
        let listItems = $('.result-controls li strong').toArray();
        for (let item of listItems) {
            let current = $(item);
            if (caseType) {
                if (current.text().indexOf(searchingText) < 0) {
                    current.parent().css('display', 'none')
                } else {
                    current.parent().css('display', 'inline-block')
                }
            } else {
                if (current.text().toLowerCase().indexOf(searchingText.toLowerCase()) < 0) {
                    current.parent().css('display', 'none')
                } else {
                    current.parent().css('display', 'inline-block')
                }
            }
        }
    }

    let resultControls = $('<div>')
        .addClass('result-controls')
        .append($('<ul>')
            .addClass('items-list'));

    $(selector)
        .append(addControls)
        .append(searchControls)
        .append(resultControls)
}