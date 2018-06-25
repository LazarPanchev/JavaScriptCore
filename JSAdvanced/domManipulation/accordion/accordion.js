function toggle() {
    let spanBtnElement=document.getElementsByClassName('button')[0];
    let headText=document.getElementsByClassName('head')[0];
    let additionalText=document.getElementById('extra');
    if(additionalText.style.display==='none'){
        additionalText.style.display='block';
        spanBtnElement.textContent='Less';
    }else {
        additionalText.style.display='none';
        spanBtnElement.textContent='More';
    }
}
