function attachEvents() {
    let deleteBtn = $('#btnDelete');
    deleteBtn.on('click', deleteTowns);

    function deleteTowns() {
        let searchingTown = $('#townName').val();
        let listTowns = $('#towns option').toArray();
        let deletedTown = false;
        for (let town of listTowns) {
            if ($(town).text() === searchingTown) {
                $(town).remove();
                deletedTown = searchingTown;
            }
        }
        $('#townName').val('');
        if (deletedTown !== false) {
            $('#result').text(`${searchingTown} deleted.`)
        } else {
            $('#result').text(`${searchingTown} not found.`)
        }

    }
}