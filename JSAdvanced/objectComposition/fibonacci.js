function getFibonator() {
    let previusFibo=0;
    let currentFibo=1;
    return function () {
        let result=previusFibo+currentFibo;
        previusFibo=currentFibo;
        currentFibo=result;
        return previusFibo;
    }
}

let fib=getFibonator();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());

