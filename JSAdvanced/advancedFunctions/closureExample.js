function counterClosure() {
    let counter=0;
    function getNextCount() {
        console.log(++counter);
    }
    return getNextCount;
}

let count=counterClosure();
count();
count();
count();
count();
count();
let secondCount=counterClosure();
secondCount();
secondCount();
secondCount();
secondCount();
secondCount();