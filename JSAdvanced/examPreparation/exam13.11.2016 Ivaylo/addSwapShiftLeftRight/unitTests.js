let createList=require('./addSwapShiftLeftRight.js');
const expect=require('chai').expect;

describe("createList Unit tests", function() {
    let list;
    beforeEach(function () {
        list=createList();
    });
    describe('test add function', function () {
        it('should add element to the list', function () {
            list.add(5);
            expect(list.toString()).to.be.equal('5','Error adding element');
        });
        it('should add element to the list', function () {
            list.add({name:'Koko',age:22});
            expect(list.toString()).to.be.equal('[object Object]','Error adding element');
        });
        it('should add elements to the list', function () {
            list.add('name');
            list.add('[2,3,5]');
            list.add(7);
            expect(list.toString()).to.be.equal('name, [2,3,5], 7','Error adding elements');
        });
    });
    describe('test shift left function',function () {
        it('test with no elements',function () {
            list.shiftLeft();
            expect(list.toString()).to.be.equal('','Error while shiftLeft element!')
        });
        it('test with one element',function () {
            list.add(5);
            list.shiftLeft();
            expect(list.toString()).to.be.equal('5','Error while shiftLeft element!')
        });
        it('test with several elements',function () {
            list.add(5);
            list.add('name');
            list.add('age');
            list.shiftLeft();
            expect(list.toString()).to.be.equal('name, age, 5','Error while shiftLeft element!')
        })
    });
    describe('test shift right function', function () {
        it('test with no elements',function () {
            list.shiftRight();
            expect(list.toString()).to.be.equal('','Error while shiftRight element!')
        });
        it('test with one element',function () {
            list.add(5);
            list.shiftRight();
            expect(list.toString()).to.be.equal('5','Error while shiftRight element!')
        });
        it('test with several elements',function () {
            list.add(5);
            list.add('name');
            list.add('age');
            list.shiftRight();
            expect(list.toString()).to.be.equal('age, 5, name','Error while shiftRight element!')
        })
    });
    describe('test swap function',function () {
        it('should return true with correct input', function () {
            list.add(5);
            list.add(6);
            list.add(7);
            expect(list.swap(0,2)).to.be.equal(true,'Error while swap elements!');
            expect(list.toString()).to.be.equal("7, 6, 5",'Error while swap elements!');
        });
        it('should return false with correct input', function () {
            expect(list.swap(0,2)).to.be.equal(false,'Error while swap elements!');
            expect(list.toString()).to.be.equal("",'Error while swap elements!');
        });
        it('should return false with correct input', function () {
            list.add(4)
            list.add(4)
            expect(list.swap(2,0)).to.be.equal(false,'Error while swap elements!');
            expect(list.toString()).to.be.equal("4, 4",'Error while swap elements!');
        });
        it('should return false with correct input', function () {
            expect(list.swap('name',2)).to.be.equal(false,'Error while swap elements!');
            expect(list.toString()).to.be.equal("",'Error while swap elements!');
        });
        it('should return false with correct input', function () {
            list.add(1);
            expect(list.swap(0,'name')).to.be.equal(false,'Error while swap elements!');
            expect(list.toString()).to.be.equal("1",'Error while swap elements!');
        });
        it('should return false with correct input', function () {
            list.add(5);
            list.add(6);
            expect(list.swap([3,4],2)).to.be.equal(false,'Error while swap elements!');
            expect(list.toString()).to.be.equal("5, 6",'Error while swap elements!');
        });
        it('should return false with correct input', function () {
            list.add(5);
            list.add(6);
            expect(list.swap(3,[2,4])).to.be.equal(false,'Error while swap elements!');
            expect(list.toString()).to.be.equal("5, 6",'Error while swap elements!');
        });
        it('should return false with correct input', function () {
            list.add(5);
            expect(list.swap(0,2)).to.be.equal(false,'Error while swap elements!');
            expect(list.toString()).to.be.equal("5",'Error while swap elements!');
        });
        it('should return false with incorrect input', function () {
            list.add(5);
            list.add(6);
            list.add(7);
            expect(list.swap(0.5,2)).to.be.equal(false,'Error while swap elements!');
            expect(list.toString()).to.be.equal("5, 6, 7",'Error while swap elements!');
        });
        it('should return false with incorrect input', function () {
            list.add(5);
            list.add(6);
            list.add(7);
            expect(list.swap(2,1.4)).to.be.equal(false,'Error while swap elements!');
            expect(list.toString()).to.be.equal("5, 6, 7",'Error while swap elements!');
        });
        it('should return false with incorrect input', function () {
            list.add(5);
            list.add(6);
            list.add(7);
            expect(list.swap(-4,2)).to.be.equal(false,'Error while swap elements!');
            expect(list.toString()).to.be.equal("5, 6, 7",'Error while swap elements!');
        });
        it('should return false with incorrect input', function () {
            list.add(5);
            list.add(6);
            list.add(7);
            expect(list.swap(0,-2)).to.be.equal(false,'Error while swap elements!');
            expect(list.toString()).to.be.equal("5, 6, 7",'Error while swap elements!');
        });
        it('should return false with incorrect input', function () {
            list.add(5);
            list.add(6);
            list.add(7);
            expect(list.swap(3,1)).to.be.equal(false,'Error while swap elements!');
            expect(list.toString()).to.be.equal("5, 6, 7",'Error while swap elements!');
        });
        it('should return false with incorrect input', function () {
            list.add(5);
            list.add(6);
            list.add(7);
            expect(list.swap(1,3)).to.be.equal(false,'Error while swap elements!');
            expect(list.toString()).to.be.equal("5, 6, 7",'Error while swap elements!');
        });
        it('should return false with incorrect input', function () {
            list.add(5);
            list.add(6);
            list.add(7);
            expect(list.swap(1,31)).to.be.equal(false,'Error while swap elements!');
            expect(list.toString()).to.be.equal("5, 6, 7",'Error while swap elements!');
        });
        it('should return false with incorrect input', function () {
            list.add(5);
            list.add(6);
            list.add(7);
            expect(list.swap(12,2)).to.be.equal(false,'Error while swap elements!');
            expect(list.toString()).to.be.equal("5, 6, 7",'Error while swap elements!');
        });
        it('should return false with incorrect input', function () {
            list.add(5);
            list.add(6);
            list.add(7);
            expect(list.swap(1,1)).to.be.equal(false,'Error while swap elements!');
            expect(list.toString()).to.be.equal("5, 6, 7",'Error while swap elements!');
        });
    })
    describe('test toString functionality',function () {
        it('should print  correct ', function () {
            expect(list.toString()).to.be.equal("",'Error while swap elements!');
        });
        it('should print  correct ', function () {
            list.add(2);
            list.add(3);
            list.shiftLeft();
            list.shiftRight();
            list.swap(0,1);
            expect(list.toString()).to.be.equal("3, 2",'Error while swap elements!');
        });
    })
});



//let list = createList();
// list.add(1);
// list.add("two");
// list.add(3);
// console.log(`list = [${list}]`);
// list.shiftLeft();
// console.log("shifted left <--");
// console.log(`list = [${list}]`);
// list.add(["four"]);
// console.log(`list = [${list}]`);
// list.shiftRight();
// console.log("shifted right -->");
// console.log(`list = [${list}]`);
// console.log(`Swaping [0] and [3]: ${list.swap(0,3)}`);
// console.log(`list = [${list}]`);
// console.log(`Swaping [1] and [1]: ${list.swap(1,1)}`);
// console.log(`list = [${list}]`);