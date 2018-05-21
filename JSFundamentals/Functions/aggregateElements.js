function aggregateElements(elements) {
    aggregate(elements,0,(a,b)=>a+b);
    aggregate(elements,0,(a,b)=>a+1/b);
    aggregate(elements,'',(a,b)=>a+b);
    
    function aggregate(arr,initialValue,func) {
        let val=initialValue;
        for(let i = 0; i < arr.length; i++){
            val=func(val,arr[i]);
        }
        console.log(val);
    }
}

aggregateElements([10,20,30]);
aggregateElements([15,25,35]);
aggregateElements([4,8,16]);