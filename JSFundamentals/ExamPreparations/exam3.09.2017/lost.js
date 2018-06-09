function lostInTheMountains(messageSign, text) {
    let pattern = /(north|east)\D*(\d{2})[^,]*\D*(,{1})\D*(\d{6})/gim;
    let messagePattern=text.substring(text.indexOf(messageSign)+messageSign.length,
        text.lastIndexOf(messageSign));
    let north = '';
    let east = '';

    let currnetMatch = pattern.exec(text);
    while (currnetMatch) {
        if (currnetMatch[1].toLowerCase() === 'north') {
            north = `${currnetMatch[2]}.${currnetMatch[4]} N`;
        } else {
            east = `${currnetMatch[2]}.${currnetMatch[4]} E`;
        }

        currnetMatch = pattern.exec(text);
    }

    let messageContent = 'Message: ' + messagePattern;

    console.log(north + '\n' + east + '\n' + messageContent);
}

lostInTheMountains('<>',
'o u%&lu43t&^ftgv><nortH4276hrv756dcc, jytbu64574655k <>ThE sanDwich is iN the'+
'refrIGErator<>yl i75evEAsTer23,lfwe 987324tlblu6b');