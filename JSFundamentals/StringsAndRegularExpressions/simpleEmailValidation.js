function emailValidation(email){
    let regex=/^[A-Za-z0-9]+@[a-z]+\.[a-z]+$/g;
    let result=regex.test(email);
    if(result){
        console.log('Valid');
    }else {
        console.log('Invalid');
    }
    
}

emailValidation('valid@email.bg');
emailValidation('koko567@djdjhdhdhdd.com');
emailValidation('invalid@emai1.bg');
emailValidation('GFG@emkj889.990.bg');