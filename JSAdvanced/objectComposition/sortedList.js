function sortedList () {
    return {
        resultArr:[],
        add:function add(element) {
            this.resultArr.push(element);
            this.size++;
            this.resultArr.sort((a,b)=>a-b);
        },
        remove:function remove(index) {
            if(index>=0 && index<this.size){
                this.resultArr.splice(index,1);
                this.size--;
            }
        },
        get:function get(index) {
            if(index>=0 && index<this.size){
                return this.resultArr[index];
            }
        },
        size:0
    };
}
let getSortedList=sortedList();

getSortedList.add(5);
getSortedList.add(3);
console.log(getSortedList.resultArr.toString());
getSortedList.remove(0);
getSortedList.get(50);

// console.log(getSortedList.size);
// getSortedList.add(3);
// getSortedList.add(5);
// getSortedList.add(2);
// getSortedList.add(4);
// getSortedList.add(1);
// getSortedList.remove(2);
// console.log("Get element: "+getSortedList.get(0));
// console.log("End size: "+ getSortedList.size);