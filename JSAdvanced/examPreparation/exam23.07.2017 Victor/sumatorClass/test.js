let Sumator=require('./sumatorClass');
const expect=require('chai').expect;

describe('Sumator Unit tests', function () {
    let sumator;
    beforeEach(()=>{
        sumator=new Sumator();
    });
    describe('initialization tests',function () {
        it('has all properties', function () {
            expect(sumator.hasOwnProperty('data')).to.equal(true, "Missing data property");
        });

        it('has functions attached to prototype', function () {
            expect(Object.getPrototypeOf(sumator).hasOwnProperty('add')).to.equal(true, "Missing add function");
            expect(Object.getPrototypeOf(sumator).hasOwnProperty('sumNums')).to.equal(true, "Missing sumNums function");
            expect(Object.getPrototypeOf(sumator).hasOwnProperty('removeByFilter')).to.equal(true, "Missing removeByFilter function");
            expect(Object.getPrototypeOf(sumator).hasOwnProperty('toString')).to.equal(true, "Missing toString function");
        });
    })
    describe('add tests', function () {
        it('should add elements', function () {
            sumator.add(5)
            expect(sumator.toString()).to.be.equal('5','Error add function!')
        });
        it('should add elements', function () {
            sumator.add('name')
            expect(sumator.toString()).to.be.equal('name','Error add function!')
        });
        it('should add elements', function () {
            sumator.add([2,3,4])
            sumator.add({a:4,b:5})
            expect(sumator.toString()).to.be.equal('2,3,4, [object Object]','Error add function!')
        });
    });
    describe('sumNums tests', function () {
        it('should return sum elements', function () {
            sumator.add(5)
            sumator.add(4.5)
            sumator.add(7)
            expect(sumator.sumNums()).to.be.equal(16.5,'Error sumNums function!')
        });
        it('should return sum elements', function () {
            sumator.add(5)
            sumator.add('name')
            sumator.add([1,2,3])
            expect(sumator.sumNums()).to.be.equal(5,'Error sumNums function!')
        });
        it('should return sum elements', function () {
            sumator.add('name')
            sumator.add([1,2,3])
            expect(sumator.sumNums()).to.be.equal(0,'Error sumNums function!')
        });
    });
    describe('removeByFilter tests', function () {
        it('should remove by filter', function () {
            sumator.add(3)
            sumator.add(2)
            sumator.add(7)
            sumator.add(8)
            sumator.removeByFilter(x => x % 2 === 0);
            expect(sumator.toString()).to.be.equal('3, 7')
        });
        it('should remove by filter', function () {
            sumator.add(3)
            sumator.removeByFilter(x => x % 2 === 0);
            expect(sumator.toString()).to.be.equal('3')
        });
        it('should remove by filter', function () {
            sumator.add(2)
            sumator.add(8)
            sumator.removeByFilter(x => x % 2 === 0);
            expect(sumator.toString()).to.be.equal('(empty)')
        });
    });
    describe('toString tests', function () {
        it('should remove by filter', function () {
            sumator.add(3)
            sumator.add(2)
            sumator.add(7)
            sumator.add(8)
            expect(sumator.toString()).to.be.equal('3, 2, 7, 8')
        });
        it('should remove by filter', function () {
            expect(sumator.toString()).to.be.equal('(empty)')
        });
    });

});

