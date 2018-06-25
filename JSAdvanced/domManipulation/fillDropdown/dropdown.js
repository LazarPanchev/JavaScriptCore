function addItem() {
    let newItemText=document.getElementById('newItemText').value;
    let newItemValue=document.getElementById('newItemValue').value;
    let selectElement=document.getElementById('menu');
    let optionElem=document.createElement('option');
    optionElem.textContent=newItemText+' '+newItemValue;
    selectElement.appendChild(optionElem);
    document.getElementById('newItemText').value='';
    document.getElementById('newItemValue').value='';
}