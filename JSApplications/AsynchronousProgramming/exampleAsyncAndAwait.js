async function loadFirstData() {
    return new Promise(function (resolve,reject) {
        setTimeout(function () {
            resolve('data1')
        },2000);
    })
}
async function loadSecondData(data) {
    return new Promise(function (resolve,reject) {
        setTimeout(function () {
            resolve(data+' data2')
        },3000);
    })
}


async function loadAllData() {
    console.log('Before promise');
    let firstData=await loadFirstData();
    let secondData=await loadSecondData(firstData);
    console.log('Result: '+secondData);
    console.log('After promise');
}

loadAllData();
console.log('Finish');