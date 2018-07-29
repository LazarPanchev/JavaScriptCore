function showView(viewName) {
    $('main > section').hide(); // Hide all views
    $('#' + viewName).show() // Show the selected view only
}

function showHideMenuLinks() {
    $("#linkHome").show();
    if (localStorage.getItem('authToken') === null) { // No logged in user
        $("#linkLogin").show();
        $("#linkRegister").show();
        $("#linkListAds").hide();
        $("#linkCreateAd").hide();
        $("#linkLogout").hide()
    } else { // We have logged in user
        $("#linkLogin").hide();
        $("#linkRegister").hide();
        $("#linkListAds").show();
        $("#linkCreateAd").show();
        $("#linkLogout").show();
        $('#loggedInUser').text("Welcome, " + localStorage.getItem('username') + "!")
    }
}
function showInfo(message) {
    let infoBox = $('#infoBox')
    infoBox.text(message)
    infoBox.show()
    setTimeout(function() {
        $('#infoBox').fadeOut()
    }, 3000)
}
function showCreateAdView() {
    $('#formCreateAd').trigger('reset')
    showView('viewCreateAd')
}

function showHomeView() {
    showView('viewHome')
}
function showLoginView() {
    showView('viewLogin');
    $('#formLogin').trigger('reset');
}
function showRegisterView() {
    showView('viewRegister');
    $('#formRegister').trigger('reset');
}
function showError(errorMsg) {
    let errorBox = $('#errorBox')
    errorBox.text("Error: " + errorMsg)
    errorBox.show()
}
