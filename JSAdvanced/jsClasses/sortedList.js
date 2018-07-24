function sortedList() {
    return class SortList {
        constructor() {
            this.resultArr = [];
            this._size = 0;
        }

        get _size() {
            return this.size;
        }

        set _size(counter) {
            this.size = counter;
        }

        add(element) {
            this.resultArr.push(element);
            this._size += 1;
            this.resultArr.sort((a, b) => a - b);
        }

        remove(index) {
            if (index >= 0 && index < this._size) {
                this.resultArr.splice(index, 1);
                this._size -= 1;
            }
        }

        get(index) {
            if (index >= 0 && index < this._size) {
                return this.resultArr[index];
            }
        }

    }
}

let getSortedList = sortedList();
let firstTry=new getSortedList;
firstTry.add(5);
firstTry.add(3);
console.log(firstTry.resultArr.toString());
firstTry.remove(0);
firstTry.get(50);

// console.log(getSortedList.size);
// getSortedList.add(3);
// getSortedList.add(5);
// getSortedList.add(2);
// getSortedList.add(4);
// getSortedList.add(1);
// getSortedList.remove(2);
// console.log("Get element: "+getSortedList.get(0));
// console.log("End size: "+ getSortedList.size);