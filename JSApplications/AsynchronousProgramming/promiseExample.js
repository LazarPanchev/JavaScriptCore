console.log('Before promise');

new Promise(function (resolve,reject) {
    console.log('started promise ');
    setTimeout(function () {
        resolve('done')
    },2000);
}).then(function (result) {
    console.log('Then returned: '+result);
});
console.log('After promise');