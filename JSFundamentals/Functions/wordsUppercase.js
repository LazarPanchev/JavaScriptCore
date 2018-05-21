function wordsUppercase(str) {
    let strUpper=str.toUpperCase();
    let result=splitWords();
    result=result.filter(w=>w!='');
    result=result.join(', ');
    return result;

    function splitWords() {
        return strUpper.split(/\W+/);
    }


}

console.log(wordsUppercase('Hi,...how are you?'));

