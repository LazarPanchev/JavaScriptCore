const expect=require('chai').expect;
let StringBuilder=require('./stringBuilder.js');

describe('StringBuilder unit tests',function () {
    let emptySb;
    let stringSb;
    beforeEach(function () {
        emptySb=new StringBuilder();
        stringSb=new StringBuilder('name');
    });
    describe('initialization tests',function () {
        it('property tests', function () {
            expect(emptySb.toString()).to.be.equal('','Error initialization!');
            expect(stringSb.toString()).to.be.equal('name','Error initialization!');
        });
        it('property tests', function () {
            expect(Object.getPrototypeOf(emptySb).hasOwnProperty('prepend')).to.be.equal(true,'Error initialization!');
            expect(Object.getPrototypeOf(emptySb).hasOwnProperty('insertAt')).to.be.equal(true,'Error initialization!');
            expect(Object.getPrototypeOf(emptySb).hasOwnProperty('remove')).to.be.equal(true,'Error initialization!');
            expect(Object.getPrototypeOf(emptySb).hasOwnProperty('toString')).to.be.equal(true,'Error initialization!');
            expect(Object.getPrototypeOf(emptySb).hasOwnProperty('append')).to.be.equal(true,'Error initialization!');
        });
    });
    describe('appendString tests',function () {
        it('with correct input', function () {
            stringSb.append(', Stefan');
            stringSb.append(', Viki');
            expect(stringSb.toString()).to.be.equal('name, Stefan, Viki','Error appendString!');
        });
    });
    describe('prepend tests',function () {
        it('with correct input', function () {
            stringSb.prepend('Stefan, ');
            stringSb.prepend('Viki, ');
            expect(stringSb.toString()).to.be.equal('Viki, Stefan, name','Error prependString!');
        });
    });
    describe('insertAt tests',function () {
        it('with correct input', function () {
            emptySb.insertAt('Stefan',0);
            emptySb.insertAt('Viki, ',0);
            expect(emptySb.toString()).to.be.equal('Viki, Stefan','Error prependString!');
        });
        it('with correct input', function () {
            emptySb.insertAt('Stefan',0);
            emptySb.insertAt('Viki, ',0);
            emptySb.insertAt('Viki, ',5);
            expect(emptySb.toString()).to.be.equal('Viki,Viki,  Stefan','Error prependString!');
        });
        it('with correct input', function () {
            emptySb.insertAt('Stefan',-3);
            emptySb.insertAt('Viki, ',-6);
            expect(emptySb.toString()).to.be.equal('Viki, Stefan','Error prependString!');
        });
        it('with correct input', function () {
            emptySb.insertAt('Stefan',2);
            emptySb.insertAt(', Viki',30);
            expect(emptySb.toString()).to.be.equal('Stefan, Viki','Error prependString!');
        });
    })
    describe('remove tests',function () {
        it('with correct input', function () {
            emptySb.append('Niki');
            emptySb.append('Mini');
            emptySb.append('Didi');
            emptySb.remove(0,3);
            expect(emptySb.toString()).to.be.equal('iMiniDidi','Error remove functionality!');
        });
        it('with correct input', function () {
            emptySb.append('Niki');
            emptySb.append('Mini');
            emptySb.append('Didi');
            emptySb.remove(3,-4);
            expect(emptySb.toString()).to.be.equal('NikiMiniDidi','Error remove functionality');
        });
        it('with correct input', function () {
            emptySb.append('Niki');
            emptySb.append('Mini');
            emptySb.append('Didi');
            emptySb.remove(3,40);
            expect(emptySb.toString()).to.be.equal('Nik','Error remove functionality');
        });
    });
    describe('verify params tests',function () {
        it('with incorect input', function () {
            expect(()=>emptySb.append(5)).to.throw(TypeError)
        });
        it('with incorect input', function () {
            expect(()=>emptySb.append(undefined)).to.throw(TypeError)
        });
    })
});