function ancientVsmemory(strArr) {
    strArr=strArr.join(' ').split(' ').map(Number);
    let numLenght=0;
    let indexStart=0;
    for(let i = 0; i < strArr.length; i++){
        let result=[];
        if(strArr[i]===32656 && strArr[i+1]===19759 &&
        strArr[i+2]===32763){
            numLenght=strArr[i+4];
            indexStart=i+6;
            for(let i = indexStart; i <numLenght+indexStart; i++){
                result.push(strArr[i]);
            }
            printResult(result);

            i=numLenght+indexStart-1;
        }
    }
    function printResult(arr) {//var chr = String.fromCharCode(97 + n);
        let finalResult=[];
        arr=arr.map(x=>x.toString()).map(x=>String.fromCharCode(x));

        console.log(arr.join(''));
    }


    
}

ancientVsmemory([
    '32656 19759 32763 0 5 0 80 101 115 104 111 0 0 0 0 0 0 0 0 0 0 0',
    '0 32656 19759 32763 0 7 0 83 111 102 116 117 110 105 0 0 0 0 0 0 0 0'

]);
ancientVsmemory([
    '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 32656 19759 32763 0',
    '5 0 71 111 115 104 111 0 0 0 0 0 0 0 0 0 32656 19759 32763 0 4 0',
    '75 105 114 111 0 0 0 0 0 0 0 0 0 0 32656 19759 32763 0 8 0 86 101',
    '114 111 110 105 107 97 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0'

]);