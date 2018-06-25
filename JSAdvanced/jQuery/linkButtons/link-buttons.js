function attachEvents() {
    $('a.button').on('click',markButton);

    function markButton() {
        $('a.button').removeClass('selected');
        $(this).addClass('selected');
    }
}