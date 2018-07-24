function listProcessor(arr) {
    let listProcessObj=(function () {
        let closureArr=[];
        function add(currStr) {
            closureArr.push(currStr);
        }
        function remove(currStr) {
            closureArr=closureArr.filter(x=>x!==currStr)
        }
        function print() {
            console.log(closureArr.toString());
        }
        return{
            add,remove,print
        }

    })();


    for(let line of arr){
        let[command,str]=line.split(' ');
        listProcessObj[command](str);
    }
}
// listProcessor([
//     'add hello',
//     'add again',
//     'remove hello',
//     'add again',
//     'print'
// ]);

listProcessor([
    'add pesho',
    'add gosho',
    'add pesho',
    'remove pesho',
    'print'
]);