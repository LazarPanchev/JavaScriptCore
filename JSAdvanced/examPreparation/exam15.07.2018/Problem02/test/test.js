const expect=require('chai').expect;
let Calculator=require('./claculatorClass.js');

describe('Calculator tests', function () {
    let calc;
    beforeEach(function () {
        calc=new Calculator();
    })
    describe('initialize tests', function () {  //one more probably
        it('should be empty', function () {
            expect(calc.hasOwnProperty('expenses')).to.be.equal(true,'Error');
        });
        it('should be empty', function () {
            expect(calc.expenses.toString()).to.be.equal("",'Error');
        });
    });
    describe('add tests', function () {  //one more probably
        it('add work', function () {
            calc.add(5)
            expect(calc.toString()).to.be.equal("5",'Error');
        });
        it('add work', function () {
            calc.add({a:5,b:4});
            expect(calc.toString()).to.be.equal('[object Object]','Error');
        });
        it('add work', function () {
            calc.add('name');
            calc.add('second');
            expect(calc.toString()).to.be.equal('name -> second','Error');
        });
        it('add work', function () {
            calc.add(['name',5]);
            calc.add(22);
            expect(calc.toString()).to.be.equal('name,5 -> 22','Error');
        });
    });
    describe('divideNums tests', function () {  //one more probably

        it('should be empty', function () {
            calc.add(10);
            calc.add(2.5);
            calc.divideNums()
            expect(calc.toString()).to.be.equal('4','Error');
        });
        it('should be empty', function () {
            calc.add(10);
            calc.divideNums()
            expect(calc.toString()).to.be.equal('10','Error');
        });
        it('should be empty', function () {
            calc.add(10);
            calc.add('name');
            calc.divideNums()
            expect(calc.toString()).to.be.equal('10','Error');
        });
        it('should be empty', function () {
            calc.add('name');
            calc.add('second');
            expect(()=>calc.divideNums()).to.throw(Error,'There are no numbers in the array!')
        });
        it('should be empty', function () {
            expect(()=>calc.divideNums()).to.throw(Error,'There are no numbers in the array!')
        });
        it('should be empty', function () {
            calc.add(20)
            calc.add(0)
            expect(calc.divideNums()).to.be.equal('Cannot divide by zero')
        });

    });
    describe('toString tests', function () {  //one more probably
        it('should be empty', function () {
            expect(calc.toString()).to.be.equal("empty array",'Error');
        });

        it('should be empty', function () {
            calc.add(22)
            calc.add(2)
            calc.add(2.2)
            calc.divideNums()
            expect(calc.toString()).to.be.equal("5",'Error');
        });
        it('should be empty', function () {
            calc.add('name');
            calc.add('second');
            calc.add('third');
            expect(calc.toString()).to.be.equal("name -> second -> third",'Error');
        });

    });
    describe('orderBy tests', function () {  //one more probably
        it('should be empty', function () {
            expect(calc.orderBy()).to.be.equal("empty",'Error');
        });
        it('should be empty', function () {
            calc.add('name')
            calc.add('second')
            calc.add('third')
            expect(calc.orderBy()).to.be.equal("name, second, third",'Error');
        });
        it('should be empty', function () {
            calc.add(5)
            calc.add(10)
            calc.add(-5)
            expect(calc.orderBy()).to.be.equal("-5, 5, 10",'Error');
        });
    });
});