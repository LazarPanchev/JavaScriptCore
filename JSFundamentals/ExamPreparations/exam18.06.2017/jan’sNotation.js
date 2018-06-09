function notation(arr) {
    let numbers=[];
    let operands=[];
    let error=false;
    while(!error){
        for(let arg of arr){
            let result=0;
            if(typeof(arg)==='number'){
                numbers.push(arg);

            }else{
                operands.push(arg);
                if(numbers.length>=2){
                    switch (operands[0]){
                        case '+':
                            result=numbers[numbers.length-2]+numbers[numbers.length-1];
                            break;
                        case '-':
                            result=numbers[numbers.length-2]-numbers[numbers.length-1];
                            break;
                        case '*':
                            result=numbers[numbers.length-2]*numbers[numbers.length-1];
                            break;
                        case '/':
                            result=numbers[numbers.length-2]/numbers[numbers.length-1];
                            break;
                    }
                    numbers.splice(numbers.length-2,2,result);
                    operands.shift();

                }else{
                    console.log('Error: not enough operands!');
                    error=true;
                    break;
                }
            }
        }
         if((numbers.length>1)&&(operands.length===0)){
            console.log('Error: too many operands!');
            error=true;
        }
        break;
    }
    if(!error){
        console.log(numbers[0]);
    }
}

notation(['-',
    4,
    '+']
);
notation([5,
    3,
    4,
    '*',
    '-']
);
notation([7,
    33,
    8,
    '-']
);
notation([15,
    '/']
);
notation([31,
    2,
    '+',
    11,
    '/']
);
notation([-1,
    1,
    '+',
    101,
    '*',
    18,
    '+',
    3,
    '/']
);
