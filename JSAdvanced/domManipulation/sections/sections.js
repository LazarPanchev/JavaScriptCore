function create(sentences) {
    let divContent=document.getElementById('content');
    for (let i = 0; i < sentences.length; i++) {
        let currSentance=sentences[i];
        let currDiv=document.createElement('div');
        let currParagraph=document.createElement('p');
        currParagraph.textContent=currSentance;
        currParagraph.style.display='none';
        currDiv.appendChild(currParagraph);
        currDiv.addEventListener('click', showContext);
        divContent.appendChild(currDiv);
    }

    function showContext(event) {
        this.firstChild.style.display='block';
    }
}