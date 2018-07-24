let expect = require('chai').expect;

class SortedList {
    constructor() {
        this.list = [];
    }

    add(element) {
        this.list.push(element);
        this.sort();
    }

    remove(index) {
        this.vrfyRange(index);
        this.list.splice(index, 1);
    }

    get(index) {
        this.vrfyRange(index);
        return this.list[index];
    }

    vrfyRange(index) {
        if (this.list.length == 0) throw new Error("Collection is empty.");
        if (index < 0 || index >= this.list.length) throw new Error("Index was outside the bounds of the collection.");
    }

    sort() {
        this.list.sort((a, b) => a - b);
    }

    get size() {
        return this.list.length;
    }
}

    describe('sortedList Unit tests', function () {
        let myList;
        beforeEach(function () {
            myList = new SortedList();
        });
        // describe('Test initial state', function () {
        //     it('add exists', function () {
        //         expect(SortedList.prototype.hasOwnProperty('add')) //that the class has a function add!!!
        //             .to.be.equal(true, 'Missing add method')
        //     });
        //     it('remove exists', function () {
        //         expect(SortedList.prototype.hasOwnProperty('remove')) //that the class has a function add!!!
        //             .to.be.equal(true, 'Missing remove method')
        //     });
        //     it('get exists', function () {
        //         expect(SortedList.prototype.hasOwnProperty('get')) //that the class has a function add!!!
        //             .to.be.equal(true, 'Missing add method')
        //     });
        //     it('vrfyRange exists', function () {
        //         expect(SortedList.prototype.hasOwnProperty('vrfyRange')) //that the class has a function add!!!
        //             .to.be.equal(true, 'Missing vrfyRange method')
        //     });
        //     it('sort exists', function () {
        //         expect(SortedList.prototype.hasOwnProperty('sort')) //that the class has a function add!!!
        //             .to.be.equal(true, 'Missing sort method')
        //     });
        //     it('size exists', function () {
        //         expect(SortedList.prototype.hasOwnProperty('size')) //that the class has a function add!!!
        //             .to.be.equal(true, 'Missing sort method')
        //     });
        //
        // });
        describe('Test add', function () {
            it('with one element', function () {
                myList.add(5);
                expect(myList.list.join(', ')).to.equal('5', 'List did not add correctly!'); //check list
            });
            it('with more elements', function () {
                myList.add(5);
                myList.add(-4);
                myList.add(60);
                myList.add('name');
                expect(myList.list.join(', ')).to.equal('-4, 5, 60, name', 'List did not add correctly!'); //check list
            });
            it('with add object', function () {
                myList.add({name: 'Ivo', age: 22});
                expect(myList.list.join(', ')).to.equal('[object Object]', 'List did not add correctly!'); //check list
            });
        });
        describe('Test remove', function () {
            it('remove one element', function () {
                myList.add(5);
                myList.remove(0);
                expect(myList.list.join(', ')).to.equal('', 'List did not remove correctly!'); //check list
            });
            it('remove second element', function () {
                myList.add(5);
                myList.add('name');
                myList.remove(1);
                expect(myList.list.join(', ')).to.equal('5', 'List did not remove correctly!'); //check list
            });
            it('should throw Error', function () {
                myList.add(5);
                expect(() => myList.remove(-1)).to.throw(Error, "Index was outside the bounds of the collection.") //check list
            });
            it('should throw Error', function () {
                myList.add(5);
                expect(() => myList.remove(30)).to.throw(Error, "Index was outside the bounds of the collection.") //check list
            });
            it('should throw Error', function () {
                myList.add(5);
                expect(() => myList.remove(1)).to.throw(Error, "Index was outside the bounds of the collection.") //check list
            });
            it('should throw Error', function () {
                expect(() => myList.remove(1)).to.throw(Error, "Collection is empty.") //check list
            });
        });
        describe('Test get', function () {
            it('get one element', function () {
                myList.add(5);
                expect(myList.get(0)).to.equal(5, 'List did not get correctly!');
            });
            it('get second element', function () {
                myList.add(5);
                myList.add('name');
                expect(myList.get(1)).to.equal('name', 'List did not get correctly!');
            });
            it('should throw Error', function () {
                myList.add(5);
                expect(() => myList.get(-1)).to.throw(Error, "Index was outside the bounds of the collection.") //check list
            });
            it('should throw Error', function () {
                myList.add(5);
                expect(() => myList.get(3)).to.throw(Error, "Index was outside the bounds of the collection.") //check list
            })
            it('should throw Error', function () {
                myList.add(5);
                myList.add(50);
                expect(() => myList.get(2)).to.throw(Error, "Index was outside the bounds of the collection.") //check list
            });
            it('should throw Error', function () {
                expect(() => myList.get(1)).to.throw(Error, "Collection is empty.") //check list
            });
        });
        describe('Test size', function () {
            it('should return correct length', function () {
                myList.add(5);
                myList.add(5);
                myList.add('Koko');
                expect(myList.size).to.be.equal(3, "size don't work  correctly!");
            });
            it('should return correct lenght', function () {
                expect(myList.size).to.be.equal(0, "size don't work  correctly!");
            });
        });
    });
