function initializeTable() {
    addCountryCapital('Bulgaria', 'Sofia');
    addCountryCapital('Germany', 'Berlin');
    addCountryCapital('Russia', 'Moscow');

    $('#createLink').on('click', addNewCountryCapital);

    function addNewCountryCapital() {
        let countryValue = $('#newCountryText').val();
        let capitalValue = $('#newCapitalText').val();
        $('#newCountryText').val('');
        $('#newCapitalText').val('');
        addCountryCapital(countryValue, capitalValue)
    }


    //check First Last acions Up Down
    function firstLastRow() {
        // $('tr:last-child a:contains(Down)').hide();
        // $('tr:nth-child(2) a:contains(Up)').hide();
        $('#countriesTable a').css('display', 'inline');
        let rows = $('#countriesTable tr');
        $(rows[2]).find("a:contains('Up')").css('display', 'none');
        $(rows[rows.length - 1]).find("a:contains('Down')").css('display', 'none');

    }

    //add new data row
    function addCountryCapital(country, capital) {
        let newRow = $('<tr>');
        let newCountry = $('<td>').text(country);
        let newCapital = $('<td>').text(capital);
        let newActions = $('<td>')
            .append($('<a href="#">[Up]</a>').on('click', moveUp))
            .append($('<a href="#">[Down]</a>').on('click', moveDown))
            .append($('<a href="#">[Delete]</a>').on('click', deleteItem));
        newRow.append(newCountry)
            .append(newCapital)
            .append(newActions);
        newRow.css('display', 'none');
        $('#countriesTable').append(newRow);
        newRow.fadeIn(100);
        firstLastRow();
    }

    function moveUp() {
        let currRow = $(this).parent().parent();
        currRow.fadeOut(function () {
            currRow.insertBefore(currRow.prev());
            firstLastRow();
            currRow.fadeIn(100);
        });


    }

    function moveDown() {
        let currRow = $(this).parent().parent();
        currRow.fadeOut(function () {
            currRow.insertAfter(currRow.next());
            firstLastRow();
            currRow.fadeIn(100);
        });


    }

    function deleteItem() {
        let currRow = $(this).parent().parent();
        currRow.fadeOut(function () {
            currRow.remove();
        });

    }

}




