const expect = require('chai').expect;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe('mathEnforcer', function () {
    describe('addFive tests', function () {
        it('with non-number ,should return undefined ', function () {
            expect(mathEnforcer.addFive('aaa')).to.be.undefined;
        });
        it('with positive number ,should return correct result ', function () {
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
        });
        it('with negative number ,should return correct result ', function () {
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
        });
        it('with floating-point number ,should return correct result ', function () {
            expect(mathEnforcer.addFive(5.53)).to.be.closeTo(10.53,0.01);
        });
    });
    describe('subtractTen tests', function () {
        it('with non-number ,should return undefined ', function () {
            expect(mathEnforcer.subtractTen('aaa')).to.be.undefined;
        });
        it('with positive number ,should return correct result ', function () {
            expect(mathEnforcer.subtractTen(5)).to.be.equal(-5);
        });
        it('with negative number ,should return correct result ', function () {
            expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15);
        });
        it('with floating-point number ,should return correct result ', function () {
            expect(mathEnforcer.subtractTen(10.53)).to.be.closeTo(0.53,0.01);
        });
    });
    describe('sum tests', function () {
        it('with non-number ,should return undefined ', function () {
            expect(mathEnforcer.sum('aaa',5)).to.be.undefined;
        });
        it('with non-number ,should return undefined ', function () {
            expect(mathEnforcer.sum(5,'aaa')).to.be.undefined;
        });
        it('with positive number ,should return correct result ', function () {
            expect(mathEnforcer.sum(5,10)).to.be.equal(15);
        });
        it('with negative number ,should return correct result ', function () {
            expect(mathEnforcer.sum(-5,-80)).to.be.equal(-85);
        });
        it('with floating-point number ,should return correct result ', function () {
            expect(mathEnforcer.sum(10.53,10.21)).to.be.closeTo(20.74,0.01);
        });
    });
});
