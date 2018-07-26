function attachEvents() {
    const basicUrl='https://baas.kinvey.com/appdata/kid_ByKEE7DVm';
    const kinveyUsername='lazar';
    const kinveyPassword='l';
    const base_64=btoa(kinveyUsername+':'+kinveyPassword);
    const authHeathers={
        "Authorization":"Basic "+base_64,
        "Content-type":"application/json"
    };
    $('.add').on('click',addBook);
    $('.load').on('click',loadAllBooks);
    //AJAX request for load all books
    function loadAllBooks() {
        request('GET','/books').then(displayAllBooks).catch(errorHandle)
    }
    function displayAllBooks(response) {
        let books=$('#books');
        books.empty();
        $('#aside .title').val('');
        $('#aside .author').val('');
        $('#aside .isbn').val('');
        for(let bookObj of response){
            books.append($(`<div class="book" data-id="${bookObj['_id']}">`)
                .append($('<label>')
                    .text('Title'))
                .append($(`<input type="text" class="title" value="${bookObj['title']}"/>`))
                .append($('<label>')
                    .text('Author'))
                .append($(`<input type="text" class="author" value="${bookObj['author']}"/>`))
                .append($('<label>')
                    .text('ISBN'))
                .append($(`<input type="text" class="isbn" value="${bookObj['isbn']}"/>`))
                .append($('<button class="update">Update</button>')
                    .on('click',updateBook))
                .append($('<button class="delete">Delete</button>')
                    .on('click',deleteBook)))
        }

    }
    //AJAX request for update a book
    function updateBook() {
        let bookElement=$(this).parent();
        let bookObj=createBookObject(bookElement);
        request('PUT',`/books/${bookElement.attr('data-id')}`,bookObj)
            .then(loadAllBooks)
            .catch(errorHandle)
    }
    //AJAX request for delete a book
    function deleteBook() {
        let bookId=$(this).parent().attr('data-id');
        request('DELETE',`/books/${bookId}`)
            .then(loadAllBooks)
            .catch(errorHandle)
    }
    function errorHandle(err) {
        alert('Error '+`(${err.textContent})`);
    }

    //AJAX request for add a book
    function addBook() {
        let element=$('#aside');
        let bookObj=createBookObject(element);
        request("POST",'/books',bookObj)
            .then(loadAllBooks)
            .catch(errorHandle)
    }
    function request(method,urlEndPoint,data) {
        return $.ajax({
            method:method,
            url:basicUrl+urlEndPoint,
            headers:authHeathers,
            data:JSON.stringify(data)
        })
    }
    function createBookObject(bookElement) {
        return{
            title:bookElement.find('.title').val(),
            author:bookElement.find('.author').val(),
            isbn:Number(bookElement.find('.isbn').val())
        }
    }

}