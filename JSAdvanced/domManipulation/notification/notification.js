function notify(message) {
    let notificationElement=document.getElementById('notification');
    notificationElement.textContent=message;
    notificationElement.style.display='block';
    setTimeout(showMessage,2000);
    function showMessage() {
        notificationElement.style.display='none';
    }
}