function concatenate(arr) {
    let result=Array.from(arr.join('')).reverse().join('');
    return result;
    
}

console.log(concatenate(['I', 'am', 'student']));
console.log(concatenate(['race', 'car']));