function usernames(arr) {
    let result=[];
    for(let data of arr){
        let [name,letters]=data.split('@');
        letters=letters.split('.').map(x=>x[0]).join('');
        result.push(name+'.'+letters);
    }
    return result.join(', ');
    
}

console.log(usernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']));