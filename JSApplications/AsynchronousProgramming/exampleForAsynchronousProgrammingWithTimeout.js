function tasks() {
    setTimeout(task1,2000);
    setTimeout(task2,3000);
    setTimeout(task3,500);
    console.log('all tasks started.');
    function task1() {
        console.log('taks1 finished in 2000 milliseconds');
    }
    function task2() {
        console.log('taks2 finished in 3000 milliseconds');
    }
    function task3() {
        console.log('taks3 finished in 500 milliseconds');
    }
}
tasks();