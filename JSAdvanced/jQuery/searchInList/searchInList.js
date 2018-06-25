function search() {
    let searchedText=$('#searchText').val();
    $('ul>li').css('font-weight','');
    let matched=$(`ul li:contains(${searchedText})`).css('font-weight','bold');
    $('#result').text(matched.length+' matches found')

}