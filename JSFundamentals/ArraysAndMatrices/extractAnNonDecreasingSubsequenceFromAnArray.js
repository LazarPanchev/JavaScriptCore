function extract(arr) {
    let result=[];
    let currentBiggest=Number.NEGATIVE_INFINITY;
    for(let i = 0; i < arr.length; i++){
        if(arr[i]>=currentBiggest){
            currentBiggest=arr[i];
            result.push(arr[i]);
        }

    }

    console.log(result.join('\n'));
}

extract([1,3,8,4,10,12,3,2,24]);
extract([1,2,3,4]);
extract([20,3,2,15,6,1]);
