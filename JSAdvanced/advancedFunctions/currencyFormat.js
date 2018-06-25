function formatCurrency(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst){
        return symbol + ' ' + result;
    }else {
        return result + ' ' + symbol;
    }
}

// function getDollarFormatter(formatCurrency) { //reseive formatCurrency-function
//     return formatter; //return function formatter
//     function formatter (value) {
//         return formatCurrency(',','$',true, value) //call formatCurrency with values
//     }

function getDollarFormatter(formatCurrency) {
    return formatter;
    function formatter(value) {
        return formatCurrency(',','$',true,value);
    }
}




let dollarFormatter = getDollarFormatter(formatCurrency);  // 1.dollarFormatter  is function 2.send formatCurrency
console.log(dollarFormatter(5345)); // $ 5345,00  // like this is formatter
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709));