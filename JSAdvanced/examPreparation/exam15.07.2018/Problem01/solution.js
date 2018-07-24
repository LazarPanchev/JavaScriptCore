function addSticker() {
    let titleInput=$('.title');
    let textInput=$('.content');
    let stickerList=$('#sticker-list');
    if(titleInput.val()!=='' && textInput.val()!==''){
        let li=$('<li>').addClass('note-content');
        let anchor=$('<a class="button">x</a>').on('click',function () {
            li.remove();
        });
        let h2Text=$(`<h2>${titleInput.val()}</h2>`);
        let href=$('<hr>');
        let paragraph=$(`<p>${textInput.val()}</p>`);
        titleInput.val('');
        textInput.val('');
        li.append(anchor);
        li.append(h2Text);
        li.append(href);
        li.append(paragraph);
        stickerList.append(li);
    }
}