const expect=require('chai').expect;

function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}

describe('createCalculator function', function () {
    let calc;
    beforeEach(function () {
        calc=createCalculator();
    });
    describe('Normal cases(valid input)',function () {
        it('should return 5 after{add 3;add 2}', function () {
            calc.add(3);
            calc.add(2);
            let actualValue=calc.get();
            let expectValue=5;
            expect(actualValue).to.be.equal(expectValue);
        });
        it('should return 0 after initialize', function () {
            let actualValue=calc.get();
            let expectValue=0;
            expect(actualValue).to.be.equal(expectValue);
        });
        it('should return -5 after{add -3;add -2}', function () {
            calc.add(-3);
            calc.add(-2);
            let actualValue=calc.get();
            let expectValue=-5;
            expect(actualValue).to.be.equal(expectValue);
        });
        it('should return 5.5 after{add 2.5;add 3.3}', function () {
            calc.add(2.5);
            calc.add(3.3);
            let actualValue=calc.get();
            let expectValue=5.8;
            expect(actualValue).to.be.equal(expectValue);
        });
        it('should return 2 after{add "10";subtract "7";add "-2"; subtract "-1"}', function () {
            calc.add("10");
            calc.subtract('7');
            calc.add('-2');
            calc.subtract('-1');
            let actualValue=calc.get();
            let expectValue=2;
            expect(actualValue).to.be.equal(expectValue);
        });

    });
    describe('Special cases(invalid input)',function () {
        it('should return NaN after {add hello}', function () {
            calc.add('hello');
            let actualValue=calc.get();
            expect(actualValue).to.be.NaN;
        });
        it('should return NaN after {subtract hello}', function () {
            calc.subtract('hello');
            let actualValue=calc.get();
            expect(actualValue).to.be.NaN;
        });
        it('should return NaN after {add hello}', function () {
            calc.add('hello');
            let actualValue=calc.get();
            expect(actualValue).to.be.NaN;
        });
        it('should return NaN after {subtract hello}', function () {
            calc.subtract('hello');
            let actualValue=calc.get();
            expect(actualValue).to.be.NaN;
        });
    })
});