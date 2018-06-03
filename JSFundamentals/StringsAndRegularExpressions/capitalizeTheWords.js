function capitalizeTheWords(str) {
    let strArr=str.split(' ');
    for(let i = 0; i < strArr.length; i++){
        strArr[i]=strArr[i].charAt(0).toUpperCase()+
            strArr[i].substring(1).toLowerCase();

    }

    console.log(strArr.join(' '));
}


capitalizeTheWords('Capitalize these words');
capitalizeTheWords('Was that Easy? tRY thIs onE for SiZe!');