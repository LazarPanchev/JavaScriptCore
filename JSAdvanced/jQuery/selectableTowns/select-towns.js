function attachEvents() {
    $('#items > li').on('click', selectItem);

    $('#showTownsButton').on('click',showTowns);

    function showTowns() {
        let result=$('#items > li[data-selected=true]')
            .toArray()
            .map(li=> $(li).text()).join(', ');
        $('#selectedTowns').text('Selected towns: '+ result)
    }


    function selectItem(){
        if($(this).attr('data-selected')){
            $(this).removeAttr('data-selected');
            $(this).css('background', '');
        }else{
            $(this).attr('data-selected','true');
            $(this).css('background', '#DDD');
        }

    }
}