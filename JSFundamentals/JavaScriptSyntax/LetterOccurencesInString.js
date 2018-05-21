function lettersOccurences(str,char) {
    let count= 0;
    for(let i=0; i<str.length;i++){
        if(str[i]===char){
            count++;
        }
    }
    console.log(count);
}

lettersOccurences('demooo', 'o');