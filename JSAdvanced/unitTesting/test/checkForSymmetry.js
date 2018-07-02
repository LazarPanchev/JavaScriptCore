const expect=require('chai').expect;

function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}

describe('Is symmetric tests', function () {
    describe('tests that returns true', function () {
        it('should return true for [1,3,5,3,1]', function () {
            let array=[1,3,5,3,1];
            let actualResult=isSymmetric(array);
            let expectedResult=true;
            expect(actualResult).to.be.equal(expectedResult);
        });
        it('should return true for [-1,3,-5,3,-1]', function () {
            let array=[-1,3,-5,3,-1];
            let actualResult=isSymmetric(array);
            let expectedResult=true;
            expect(actualResult).to.be.equal(expectedResult);
        });
        it('should return true for [2,2]', function () {
            let array=[2,2];
            let actualResult=isSymmetric(array);
            let expectedResult=true;
            expect(actualResult).to.be.equal(expectedResult);
        });
        it('should return true for [10]', function () {
            let array=[10];
            let actualResult=isSymmetric(array);
            let expectedResult=true;
            expect(actualResult).to.be.equal(expectedResult);
        });
        it('should return true for [3,hi,{a:4,b:7},new Date(),{a:4,b:7},hi,3]', function () {
            let array=[3,'hi',{a:4,b:7},new Date(),{a:4,b:7},'hi',3];
            let actualResult=isSymmetric(array);
            let expectedResult=true;
            expect(actualResult).to.be.equal(expectedResult);
        });
    });
    describe('tests that returns false', function () {
        it('should return false for [1,3,5,4,1]', function () {
            let array=[1,3,5,4,1];
            let actualResult=isSymmetric(array);
            let expectedResult=false;
            expect(actualResult).to.be.equal(expectedResult);
        });
        it('should return fasle for [-1,3,-5,3,1]', function () {
            let array=[-1,3,-5,3,1];
            let actualResult=isSymmetric(array);
            let expectedResult=false;
            expect(actualResult).to.be.equal(expectedResult);
        });
        it('should return false for [2,1]', function () {
            let array=[2,1];
            let actualResult=isSymmetric(array);
            let expectedResult=false;
            expect(actualResult).to.be.equal(expectedResult);
        });
        it('should return false for [3,hi,{a:4,b:7},new Date(),{a:4,b:7},hi,3]', function () {
            let array=[3,'hi',{a:4,b:7},new Date(),{a:4,b:8},'hi',3];
            let actualResult=isSymmetric(array);
            let expectedResult=false;
            expect(actualResult).to.be.equal(expectedResult);
        });
        it('should return false for string', function () {
            let array='gogo';
            let actualResult=isSymmetric(array);
            let expectedResult=false;
            expect(actualResult).to.be.equal(expectedResult);
        });
    })
});

