const url = 'https://phonebook-d676c.firebaseio.com/phonebook';
let person = $('#person');
let phone = $('#phone');
let table = $('#phonebook');
$('#btnLoad').on('click', loadContacts);
$('#btnCreate').on('click', addContact);

function loadContacts() {
    $('#phonebook').empty();
    $.ajax({
        method: 'GET',
        url: url + '.json'
    }).then(appendContacts)
        .catch(showError)

}

function appendContacts(contacts) {    //with sorting function
    table.empty();
    let sortedKeys =
        Object.keys(contacts).sort((key1, key2) => contacts[key1].name.localeCompare(contacts[key2].name));
    for (let id of sortedKeys) {
        let currLi = $('<li>').text(`${contacts[id].name}: ${contacts[id].phone}`);
        let btn = $('<a href="#">')
            .text('Delete')
            .on('click', function () {
                $.ajax({
                    method: 'DELETE',
                    url: url + `/${id}` + '.json',
                }).then(function () {
                    currLi.remove();
                }).catch(showError);
            });
        currLi.append(btn);
        table.append(currLi);
    }
}

// function appendContacts(contacts) {  //without sorting
//         for(let key in contacts){
//             let currLi=$('<li>').text(`${contacts[key].name}: ${contacts[key].phone}`);
// let btn=$('<a href="#">')
//     .text('Delete')
//     .on('click',function () {
//         $(this).parent().remove();
//         $.ajax({
//             method:'DELETE',
//             url:url+`/${id}`+'.json',
//         })
//     });
// currLi.append(btn);
//             table.append(currLi);
//         }
// }
function addContact() {
    table.empty()
    let name = person.val();
    let number = phone.val();
    if (name.trim() !== '' && number.trim() !== '') {
        $.ajax({
            method: 'POST',
            url: url + '.json',
            data: JSON.stringify({
                name: name,
                phone: number
            })
        }).then(postContact)
            .catch(showError)
    }
}

function postContact() {
    person.val('');
    phone.val('');
}

function showError(err) {
    console.error(err)
}