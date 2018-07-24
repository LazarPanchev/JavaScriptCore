const expect=require('chai').expect;
let makeList=require('./addLeftRightClearList.js');

describe("addLeftRightClearList Unit tests", function() {
    let myList = {};
    beforeEach(function () {
        myList = makeList();
    });
    it("should be empty list while initialization", function() {

        expect(myList.toString()).to.equal('','The list is not empty!');
    });
    it("should add left element", function() {
        myList.addLeft('name');
        expect(myList.toString()).to.equal('name','The addLeft function no work');
    });
    it("should add left element", function() {
        myList.addLeft(5);
        myList.addLeft('name');
        expect(myList.toString()).to.equal('name, 5','The addLeft function no work');
    });
    it("should add right element", function() {
        myList.addRight('name');
        expect(myList.toString()).to.equal('name','The addLeft function no work');
    });
    it("should add right element", function() {
        myList.addRight(6)
        myList.addRight('name');
        expect(myList.toString()).to.equal('6, name','The addLeft function no work');
    });
    it("should add and remove elements", function() {
        myList.addRight(6);
        myList.addRight('name');
        myList.addLeft('Stefan');
        expect(myList.toString()).to.equal('Stefan, 6, name','The addLeft function no work');
    });
    it("should clear elements", function() {
        myList.addRight(6);
        myList.addRight('name');
        myList.addLeft('Stefan');
        myList.clear();
        expect(myList.toString()).to.equal('','The addLeft function no work');
    });
});