function attachEvents() {
     let addBtn=$('#btnAdd');
     addBtn.on('click',function () {
         let textValue=$('#newItem').val();
         if(textValue){
             $('#towns').append($('<option>').text(textValue));
             $('#newItem').val('');
         }
     });
     let deleteBtn=$('#btnDelete');
     deleteBtn.on('click',()=>{
         let selectedItem=$('#towns option:selected');
         if(selectedItem){
             selectedItem.remove()
         }
     })
}
