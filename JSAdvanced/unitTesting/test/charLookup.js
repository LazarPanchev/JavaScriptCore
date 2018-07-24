const expect=require('chai').expect;

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }
    return string.charAt(index);
}

describe('lookupChar function', function () {
    describe('Normal cases(valid input)', function () {
        it('should return correct result for ("programming",5)', function () {
            let inputString="programming";
            let index=5;
            let expectedResult="a";
            let actualResult=lookupChar(inputString,index);
            expect(actualResult).to.be.equal(expectedResult);
        });

    });
    describe('Special cases (invalid input)', function () {
        it('should return undefined for a number(5,5)', function () {
            let inputString=5;
            let index=5;
            let expectedResult=undefined;
            let actualResult=lookupChar(inputString,index);
            expect(actualResult).to.be.equal(expectedResult);
        });
        it('should return undefined for a double("go",1.5)', function () {
            let inputString="go";
            let index=1.5;
            let expectedResult=undefined;
            let actualResult=lookupChar(inputString,index);
            expect(actualResult).to.be.equal(expectedResult);
        });
        it('should return undefined for ("programming","4")', function () {
            let inputString="programming";
            let index="4";
            let expectedResult=undefined;
            let actualResult=lookupChar(inputString,index);
            expect(actualResult).to.be.equal(expectedResult);
        });
        it('should return Incorrect index for ("programming",-1)', function () {
            let inputString="programming";
            let index=-1;
            let expectedResult="Incorrect index";
            let actualResult=lookupChar(inputString,index);
            expect(actualResult).to.be.equal(expectedResult);
        });
        it('should return Incorrect index for "programming",11)', function () {
            let inputString="programming";
            let index=11;
            let expectedResult="Incorrect index";
            let actualResult=lookupChar(inputString,index);
            expect(actualResult).to.be.equal(expectedResult);
        });
    });
});