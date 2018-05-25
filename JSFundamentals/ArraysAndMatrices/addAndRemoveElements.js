function addAndRemoveElements(arr) {
    let result=[];
    let element=1;
    for(let i = 0; i < arr.length; i++){
        let command=arr[i];
        switch (command){
            case 'add':
                result.push(element++);
                break;
            case 'remove':
                if(result.length===0){
                    element++;
                    break;
                }
                result.pop();
                element++;
                break;
        }
    }

    if(result.length===0){
        console.log('Empty');
    }else{
        console.log(result.join('\n'));
    }
}

addAndRemoveElements([
    'add',
    'add',
    'add',
    'add'
]);
addAndRemoveElements([
    'add',
    'add',
    'remove',
    'add',
    'add'
]);
addAndRemoveElements([
    'remove',
    'remove',
    'remove'
]);