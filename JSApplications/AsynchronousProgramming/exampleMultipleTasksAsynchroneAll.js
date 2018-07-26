let first=new Promise(function (resolve,reject) {
    setTimeout(function () {
        resolve('done 1')
    },2000);
})
let second=new Promise(function (resolve,reject) {
    setTimeout(function () {
        resolve('done 2')
    },1500);
})
let third=new Promise(function (resolve,reject) {
    setTimeout(function () {
        resolve('done 3')
    },3000);
})
Promise.all([first,second,third])
    .then(function (result) {
    for(let line of result){
        console.log(line+' finished already');
    }
       // console.log(result.join('\n'));
    console.log('all done');
}).catch(function (err) {
    console.log(err);
});
