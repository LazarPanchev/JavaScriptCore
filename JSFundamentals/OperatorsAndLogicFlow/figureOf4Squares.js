function figureOfSquares(num) {
    let result = '';
    let rows = num;
    if (num % 2 === 0) {
        rows = num - 1;
    }

    for (let j = 0; j <rows; j++) {
        if (j===0 || j===Math.round(rows/2-1) || j===rows-1) {
            result += "+" + "-".repeat(num - 2) + "+" + "-".repeat(num - 2) + "+\n";
        } else {
            result += "|" + " ".repeat(num - 2) + "|" + " ".repeat(num - 2) + "|\n";
        }
    }


    return result;
}

console.log(figureOfSquares(7));