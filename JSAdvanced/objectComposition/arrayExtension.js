(function () {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };
    Array.prototype.skip = function (n) {
        return this.slice(n);
    };
    Array.prototype.take = function (n) {
        return this.slice(0, n);
    };
    Array.prototype.sum = function () {
        return this.reduce((a, b) => a + b);
    };
    Array.prototype.average = function () {
        return this.reduce((a, b) => a + b) / this.length;
    };

    let firstTry = [1, 4, 7];
    console.log(firstTry.last());
    console.log(firstTry.skip(2));
    console.log(firstTry.average());
    console.log(firstTry.sum());
})();
