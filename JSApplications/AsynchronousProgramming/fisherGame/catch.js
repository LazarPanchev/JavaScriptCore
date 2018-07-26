function attachEvents() {
    const basicUrl = 'https://baas.kinvey.com/appdata/kid_S1kqxE8Nm';
    const username = 'lazar';
    const password = 'l';
    const base_64 = btoa(username + ':' + password);
    const authHeaders = {
        "Authorization": "Basic " + base_64,
        "Content-type":"application/json"
    };
    $('.load').on('click',loadAllCatches);
    $('.add').on('click',createCatch);

    function request(method,endpoint,data) {  //if no data -it will be undefined
        return $.ajax({
            method:method,
            url:basicUrl+endpoint,
            headers:authHeaders,
            data: JSON.stringify(data)
        })
    }
    //AJAX request to read/load all catches
    function loadAllCatches() {
        request('GET','/biggestCatches')
            .then(displayAllCatches)
            .catch(handleError)
    }
    function displayAllCatches(data) { //response
        let catches=$('#catches');
        catches.empty();
        for(let obj of data){
            catches.append($(`<div class="catch" data-id="${obj['_id']}">`)
                .append($('<label>')
                    .text('Angler'))
                .append($(`<input type="text" class="angler" value="${obj['angler']}"/>`))
                .append($('<label>')
                    .text('Weight'))
                .append($(`<input type="number" class="weight" value="${obj['weight']}"/>`))
                .append($('<label>')
                    .text('Species'))
                .append($(`<input type="text" class="species" value="${obj['species']}"/>`))
                .append($('<label>')
                    .text('Location'))
                .append($(`<input type="text" class="location" value="${obj['location']}"/>`))
                .append($('<label>')
                    .text('Bait'))
                .append($(`<input type="text" class="bait" value="${obj['bait']}"/>`))
                .append($('<label>')
                    .text('Capture Time'))
                .append($(`<input type="number" class="captureTime" value="${obj['captureTime']}"/>`))
                .append($('<button class="update">Update</button>')
                    .on('click',updateCatch))
                .append($('<button class="delete">Delete</button>')
                    .on('click',deleteCatch)))
        }
    }

    //AJAX request to update a catch
    function updateCatch() {
        let catchEl=$(this).parent();
        let dataObj=createDataJson(catchEl);
        request('PUT',`/biggestCatches/${catchEl.attr('data-id')}`,dataObj)
            .then(loadAllCatches)
            .catch(handleError);
    }
    //AJAX request to delete a catch
    function deleteCatch() {
        let catchId=$(this).parent().attr('data-id');

        request('DELETE',`/biggestCatches/${catchId}`)
            .then(loadAllCatches)
            .catch(handleError)
    }
    //AJAX request to create a catch
    function createCatch() {
        let catchEl=$('#addForm');
        let dataObj=createDataJson(catchEl);
        request('POST','/biggestCatches',dataObj)
            .then(loadAllCatches)
            .catch(handleError)
    }

    function createDataJson(catchEl) {
        return{
            angler:catchEl.find('.angler').val(),
            weight:Number(catchEl.find('.weight').val()),
            species:catchEl.find('.species').val(),
            location:catchEl.find('.location').val(),
            bait:catchEl.find('.bait').val(),
            captureTime:Number(catchEl.find('.captureTime').val())
        }
    }
    function handleError(err) {
        alert(`ERROR ${err.statusText}`)
    }


}