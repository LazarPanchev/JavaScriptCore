function minkeDecode(strArr) {
    let start=Number(strArr[0]);
    let end=Number(strArr[1]);
    let rightWord=strArr[2];
    let text=strArr[3];
    let countryPattern=/[A-Z][a-z]*[A-Z]/g;
    let country=countryPattern.exec(text)[0];
    let partForRemove=country.substring(start,end+1);
    country=country.replace(partForRemove,rightWord);
    let lastLetter=country[country.length-1].toLowerCase();
    country=country.replace(country[country.length-1],lastLetter);

    let numPattern=/[0-9]{3}(\.[0-9]+)*/g;
    let numbers=text.match(numPattern).map(Number);
    let city=[];
    for(let i = 0; i < numbers.length; i++){
        let num=Number(numbers[i]);
        if (!(Number.isInteger(num))){
            num=Math.ceil(num);
        }
        city.push(String.fromCharCode(num));
    }
    city[0]=city[0].toUpperCase();
    city=city.join('');

    console.log(`${country} => ${city}`);
    
}

// minkeDecode([
//     "3",
//     "5",
//     "gar",
//     "114 sDfia 1, riDl10 confin$4%#ed117 likewise it humanity aTe114.223432 BultoriA - Varnd railLery101 an unpacked as he"]);
// minkeDecode([
//     "1",
//     "4",
//     "loveni",
//     "SerbiA 67 – sDf1d17ia aTe 1, 108 confin$4%#ed likewise it humanity  Bulg35aria - VarnA railLery1a0s1 111 an unpacked as 109 he"])
minkeDecode(['5',
'7',
'riA',
'BulgaziP 67 � sDf1d17ia aTe 1, 098 confin$4%#ed 117 likewise 114 103 it human 097 ity  Bulg35aria - VarnA railLery1a0s1 115 an unpacked as he']);