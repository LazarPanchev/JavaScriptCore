function attachEvents() {
    $('#submit').on('click', function () {
        let author = $('#author').val();
        let content = $('#content').val();
        if (author !== '' && content !== '') {
            let time = Date.now();
            let message = {
                author: author,
                content: content,
                timestamp: time
            };
            let request = {
                method: 'POST',
                url: 'https://messenger-ecf85.firebaseio.com/messenger.json',
                data: JSON.stringify(message),
                success: handleSuccess,
                error: handleError
            };
            $.ajax(request)
        }
    });

    function handleSuccess(response) {
        $('#author').val('');
        $('#content').val('');
    }

    function handleError(err) {
        console.log(err);
    }

    $('#refresh').on('click', function () {
        let request = {
            method: 'GET',
            url: 'https://messenger-ecf85.firebaseio.com/messenger.json',
            success: showMessages,
            error: function (err) {
                console.log(err);
            }
        };
        $.ajax(request)
    });

    function showMessages(response) {
        let messageBox = $('#messages');
        messageBox.empty();
        let sortedKeys = Object.keys(response).sort((a, b) => a['timestamp'] - b['timestamp']);
        for (let key of sortedKeys) {
            if(response[key].hasOwnProperty('author')&&
                response[key].hasOwnProperty('content')&&
                response[key].hasOwnProperty('timestamp')
            ){
                messageBox.append(`${response[key].author}: ${response[key].content}\n`)
            }
        }
    }
}