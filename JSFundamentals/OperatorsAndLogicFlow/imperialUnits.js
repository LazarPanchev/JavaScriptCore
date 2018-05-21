function convertUnits(number) {
    let inches=Number(number);
    let feet=Number.parseInt(number/12);
    inches=inches%12;

    console.log(`${feet}'` + "-" + `${inches}"`);
    
}

convertUnits(36);
convertUnits(55);
convertUnits(11);