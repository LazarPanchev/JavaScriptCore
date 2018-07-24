function listBuilder(selector) {
    let containerContent=$(selector+' *');
    function createNewList() {
        containerContent.remove();
        $(selector).append($('<ul>'));
    }
    
    function addItem(text) {
        let newLi=$('<li>')
            .text(text);
        let list=$(selector+' ul');
        newLi.append($('<button>Up</button>')
            .on('click',function () {
                let currentElement=$(this).parent();
                currentElement.insertBefore(currentElement.prev());
            }));
        newLi.append($('<button>Down</button>')
            .on('click',function () {
                let currentElement=$(this).parent();
                currentElement.insertAfter(currentElement.next());
            }));
        list.append(newLi);

    }
    return{
        createNewList,
        addItem
    }
}