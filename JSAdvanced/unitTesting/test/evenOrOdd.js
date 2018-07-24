const expect=require('chai').expect;

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }
    return "odd";
}

describe('isOddOrEven function',function () {
    describe('Normal cases(valid input)',function () {
        it('should return "even" for "name"', function () {
            let input="name";
            let actualResult=isOddOrEven(input);
            let expectResult='even';
            expect(actualResult).to.be.equal(expectResult,
                'Function did not return the correct result!');
        });
        it('should return even for "" ', function () {
            let input="";
            let actualResult=isOddOrEven(input);
            let expectResult='even';
            expect(actualResult).to.be.equal(expectResult,
                'Function did not return the correct result!');
        });
        it('should return odd for "has"', function () {
            let input="has";
            let actualResult=isOddOrEven(input);
            let expectResult='odd';
            expect(actualResult).to.be.equal(expectResult,
                'Function did not return the correct result!');
        });

    });
    describe('Special cases (invalid input)', function () {
        it('should return undefined for number ', function () {
            let input=5;
            let actualResult=isOddOrEven(input);
            let expectResult=undefined;
            expect(actualResult).to.be.equal(expectResult,
                'Function did not return the correct result!');
        });
        it('should return undefined for []', function () {
            let input=[];
            let actualResult=isOddOrEven(input);
            let expectResult=undefined;
            expect(actualResult).to.be.equal(expectResult,
                'Function did not return the correct result!');
        });
    });
});