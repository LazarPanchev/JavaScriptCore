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


lostInTheMountains('4ds',
'eaSt 19,432567noRt north east 53,123456north' +
    ' 43,3213454dsNot all those who wander are lost.4dsnorth 47,874532');
