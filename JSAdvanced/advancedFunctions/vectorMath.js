let solution=(function () {
    return {
        add: (a, b) => {
            let currResult = [];
            currResult.push(a[0] + b[0]);
            currResult.push(a[1] + b[1]);
            return currResult
        },
        multiply: (a, b) => {
            let currResult = [];
            currResult.push(a[0] * b);
            currResult.push(a[1] * b);
            return currResult
        },
        length: (a) => {
            return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2));
        },
        dot: (a, b) => {
            return (a[0] * b[0]) + (a[1] * b[1])
        },
        cross: (a, b) => {
            return (a[0] * b[1]) - (a[1] * b[0])
        }
    }
})();

console.log(solution.add([1, 1], [1, 0]));
solution.multiply([3.5, -2], 2);
solution.length([3, -4]);
solution.dot([1, 0], [0, -1]);
solution.cross([3, 7], [1, 0]);