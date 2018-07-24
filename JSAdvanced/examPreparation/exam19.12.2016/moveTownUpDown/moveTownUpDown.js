function move(direction) {
    let selectMenu=$('#towns');
    let towns=selectMenu;
    let selectedElement=selectMenu.find(':selected');
    if(direction===-1){
        selectedElement.insertBefore(selectedElement.prev())
    }else {
        selectedElement.insertAfter(selectedElement.next())
    }
}