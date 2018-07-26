function attachEvents(){
    $('#btnLoad').on('click',loadPhonebook);
    $('#btnCreate').on('click',createEntry);
    // let url='https://phonebookextended.firebaseio.com/phonebook';
    let url='https://phonebook-nakov.firebaseio.com/phonebook';

    let phonebook=$('#phonebook');
    function loadPhonebook() {
        let request={
            method:'GET',
            url:url+'.json',
            success:handleSuccess,
            error:handleError
        };
        $.ajax(request);
    }
    function handleSuccess(response) {
        phonebook.empty();
        for(let key in response){
            let currNumber=$('<li>')
                .text(`${response[key].person}: ${response[key].phone}`);
            let delBtn=$('<button>[Delete]</button>').on('click',function () {
                let delRequest={
                    method:'DELETE',
                    url:url+`/${key}`+'.json',
                    success:function () {
                        loadPhonebook()
                    },
                    error:handleError()
                };
                $.ajax(delRequest)
            });
            currNumber.append(delBtn);
            phonebook.append(currNumber)
        }
    }
    function handleError(err) {
        console.log(err);
    }
    function createEntry() {
        let personBox=$('#person');
        let phonebookBox=$('#phone');
        if(personBox.val().trim()!==''&&phonebookBox.val().trim()!==''){
            let newPhoneEntry={
                person:personBox.val(),
                phone:phonebookBox.val()
            };
            let request={
                method:"POST",
                url:url+'.json',
                data:JSON.stringify(newPhoneEntry),
                success:function () {
                    personBox.val('');
                    phonebookBox.val('');
                    loadPhonebook();
                },
                error:handleError
            };
            $.ajax(request);
        }
    }
}