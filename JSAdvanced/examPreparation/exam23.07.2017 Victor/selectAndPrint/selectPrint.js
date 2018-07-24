function move(command) {
    let selectedOption;
    let selectedTown;
    switch (command){
        case 'right':
            selectedOption=$('#available-towns option:selected');
            selectedTown=selectedOption.text();
            if(selectedTown){
                $('#selected-towns').append($('<option>').text(selectedTown));
                selectedOption.remove()
            }
            break;
        case 'left':
            selectedOption=$('#selected-towns option:selected');
            selectedTown=selectedOption.text();
            if(selectedTown){
                $('#available-towns').append($('<option>').text(selectedTown));
                selectedOption.remove()
            }
            break;
        case 'print':
            $('#output').text('');
            let result=Array.from($('#selected-towns option')).map(x=>$(x).text());
            $('#output').append(result.join('; '))
            break;
    }
}