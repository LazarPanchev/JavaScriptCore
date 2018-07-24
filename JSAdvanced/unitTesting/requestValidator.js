function requestValidator(obj) {
    if(!obj.hasOwnProperty('method')){
        throw new Error('Invalid request header: Invalid Method');
    }else if(!obj.hasOwnProperty('uri')){
        throw new Error('Invalid request header: Invalid URI');
    }else if(!obj.hasOwnProperty('version')){
        throw new Error('Invalid request header: Invalid Version');
    }else if(!obj.hasOwnProperty('message')){
        throw new Error('Invalid request header: Invalid Message');
    }
    let methods=['GET','POST','DELETE', 'CONNECT'];
    let versions=['HTTP/0.9','HTTP/1.0','HTTP/1.1','HTTP/2.0'];
    //let messages=['<','>','\\','&',"'",'"'];
    //let uriPattern=/^[A-Za-z0-9]+(\.[A-Za-z0-9]+)+$/g;
    let uriPattern=/^[.A-Za-z0-9]+$/g;
    let messagePattern=/^[^<>\\&'"]+$/g;

    if(!methods.includes(obj.method)){
        throw new Error('Invalid request header: Invalid Method');
    }else if(!uriPattern.test(obj.uri)) {
        if((obj.uri!=='*')||(obj.uri==='')){
            throw new Error('Invalid request header: Invalid URI');
        }
    }else if(!versions.includes(obj.version)){
        throw new Error('Invalid request header: Invalid Version');
    }else if(!messagePattern.test(obj.message)){
        if(obj.message!==''){
            throw new Error('Invalid request header: Invalid Message');
        }
    }
    return obj;
}
console.log(requestValidator({
    method: 'GET',
    uri: 'kkk jjjj',
    version: 'HTTP/0.8',
    message: ''
}));

// console.log(requestValidator({
//     method: 'GET',
//     uri: '...aaa666',
//     version: 'HTTP/1.1',
//     message: ''
// }));
// requestValidator({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
// });
// requestValidator({
//     method: 'POST',
//     uri: 'home.bash',
//     message: 'rm -rf /*'
// });



// requestValidator({
//     method: 'GET',
//     uri: 'svn.public.catalog',
//     version: 'HTTP/1.1',
//     message: ''
// });
// requestValidator({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
// });
// requestValidator({
//     method: 'POST',
//     uri: 'home.bash',
//     message: 'rm -rf /*'
// });