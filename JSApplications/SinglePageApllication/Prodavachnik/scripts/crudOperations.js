const BASE_URL = 'https://baas.kinvey.com/';
const APP_KEY = 'kid_Bk_EEE9Nm';
const APP_SECRET = 'ba51097ffff54e4888edb768119bee72';
const AUTH_HEADERS = {'Authorization': "Basic " + btoa(APP_KEY + ":" + APP_SECRET)};

function registerUser() {
    let username = $('#formRegister input[name="username"]').val();
    let password = $('#formRegister input[name="passwd"]').val();
    $.ajax({
        method: "POST",
        url: BASE_URL + 'user/' + APP_KEY + '/',
        headers: AUTH_HEADERS,
        data: {username, password},
        success: function (res) {
            signInUser(res, 'Registration successful!')
        },
        error: handleAjaxError
    })
}

function signInUser(res, message) {
    saveAuthInSession(res);
    showHideMenuLinks();
    showHomeView();
    let loggedInUser = $('#loggedInUser').show();
    loggedInUser.text("Welcome, " + res.username + "!");
    loggedInUser.show();
    showInfo(message)
}

function saveAuthInSession(userInfo) {
    localStorage.setItem('authToken', userInfo._kmd.authtoken);
    localStorage.setItem('username', userInfo.username);
    localStorage.setItem('userId', userInfo._id)

}

function listAds() {
    $.ajax({
        method: 'GET',
        url: BASE_URL + 'appdata/' + APP_KEY + '/advertisements',
        headers: {Authorization: 'Kinvey ' + localStorage.getItem('authToken')}
    }).then(function (res) {
        displayAds(res.reverse())
    }).catch(handleAjaxError)
}

function loginUser() {
    let username = $('#formLogin input[name="username"]').val()
    let password = $('#formLogin input[name="passwd"]').val()
    $.ajax({
        method: 'POST',
        url: BASE_URL + 'user/' + APP_KEY + '/login',
        headers: AUTH_HEADERS,
        data: {username, password}
    }).then(function (res) {
        signInUser(res, 'Login successful.')
    }).catch(handleAjaxError)
}

function logoutUser() {
    $.ajax({
        method: 'POST',
        url: BASE_URL + 'user/' + APP_KEY + '/_logout',
        headers: {Authorization: 'Kinvey ' + localStorage.getItem('authToken')}
    }).then(function () {
        localStorage.clear();
        showHomeView();
        showHideMenuLinks();
        $('#loggedInUser').text("");
        showInfo('Logout successful.')
    }).catch(handleAjaxError)

}

function displayAds(ads) {
    showView('viewAds');
    $('#ads > table tr').each((index, element) => {  //clear all old ads
        if (index > 0) {                               //without first row- it is menu
            $(element).remove()
        }
    });
    for (let ad of ads) {
        let tr = $('<tr>');
        tr.append($(`<td>${ad.title}</td>`))
        tr.append(`<td>${ad.publisher}</td>`);
        tr.append(`<td>${ad.description}</td>`);
        tr.append(`<td>${(Number(ad.price)).toFixed(2)}</td>`);
        tr.append(`<td>${ad.date}</td>`);
        let td = $('<td>');
        let aReadMore = $('<a href="#">[Read more]</a>').on('click', function () {
            readMore(ad)
        });
        td.append(aReadMore);
        if (ad._acl.creator === localStorage.getItem("userId")) {
            let aEdit = $('<a href="#">[Edit]</a>').on('click', function () {
                loadAdForEdit(ad)
            });
            let aDel = $('<a href="#">[Delete]</a>').on('click', function () {
                deleteAd(ad)
            });
            td.append(aReadMore).append(aEdit).append(aDel);
        }
        tr.append(td);
        $('#ads > table').append(tr)
    }
}

function readMore(ad) {
    showView('viewDetailsAd');
    let details = $('#details');
    details.empty();

    let div = $('<div>');
    div.append($('<br>'));
    div.append($(`<div class="ad-box"><img src="${ad.imageUrl}"></div>`));
    div.append($('<h1>').text(`Title:  ${ad.title}`));
    div.append($('<p>').text(`Description:  ${ad.description}`));
    div.append($('<p>').text(`Published Date:  ${ad.date.toString()}`));
    div.append($('<p>').text(`Publisher:  ${ad.publisher}`));
    //div.append(`<p>${ad.imageUrl}</p>`);
    div.append($('<h2>').text(`Price:  ${Number(ad.price).toFixed(2)}lv.`));
    details.append(div);
}

function createAd() {
    let title = $('#formCreateAd input[name="title"]').val();
    let description = $('#formCreateAd textarea[name="description"]').val();
    let date = $('#formCreateAd input[name="datePublished"]').val();
    let price = Number($('#formCreateAd input[name="price"]').val());
    let imageUrl=$('#formCreateAd input[name="imageUrl"]').val();
    let publisher = localStorage.getItem('username');

    if (title.length === 0) {
        showError('Title cannot be empty!');
        return;
    }

    if (price === 0) {
        showError('Price cannot be zero!');
        return;
    }

    $.ajax({
        method: 'POST',
        url: BASE_URL + 'appdata/' + APP_KEY + '/advertisements',
        headers: {Authorization: 'Kinvey ' + localStorage.getItem('authToken')},
        data: {title, description, publisher, date, price,imageUrl}
    }).then(function (res) {
        listAds();
        showInfo('Ad created.')
    }).catch(handleAjaxError)
}

function loadAdForEdit(ad) {
    showView('viewEditAd')
    $('#formEditAd input[name="title"]').val(ad.title)
    $('#formEditAd textarea[name="description"]').val(ad.description)
    $('#formEditAd input[name="datePublished"]').val(ad.date)
    $('#formEditAd input[name="price"]').val(ad.price)
    $('#formEditAd input[name="id"]').val(ad._id)
    $('#formEditAd input[name="publisher"]').val(ad.publisher)  //set bookId for editing we need it
    $('#formEditAd input[name="imageUrl"]').val(ad.imageUrl)
}

function editAd() {
    let title = $('#formEditAd input[name="title"]').val();
    let description = $('#formEditAd textarea[name="description"]').val();
    let date = $('#formEditAd input[name="datePublished"]').val();
    let price = Number($('#formEditAd input[name="price"]').val());
    let id = $('#formEditAd input[name="id"]').val();
    let publisher = $('#formEditAd input[name="publisher"]').val();
    let imageUrl=$('#formEditAd input[name="imageUrl"]').val();
    $.ajax({
        method: 'PUT',
        url: BASE_URL + 'appdata/' + APP_KEY + '/advertisements/' + id,
        headers: {Authorization: 'Kinvey ' + localStorage.getItem('authToken')},
        data: {title, description, publisher, date, price,imageUrl}
    }).then(function (res) {
        listAds();
        showInfo('Ad edited.')
    }).catch(handleAjaxError)
}

function deleteAd(ad) {
    $.ajax({
        method: 'DELETE',
        url: BASE_URL + 'appdata/' + APP_KEY + '/advertisements/' + ad._id,
        headers: {Authorization: 'Kinvey ' + localStorage.getItem('authToken')},
    }).then(function () {
        listAds();
        showInfo('Ad deleted.');
    })
}

function handleAjaxError(error) {
    let errorMsg = JSON.stringify(error);
    if (error.readyState === 0)
        errorMsg = "Cannot connect due to network error.";
    if (error.responseJSON && error.responseJSON.description)
        errorMsg = error.responseJSON.description;
    showError(errorMsg)
}