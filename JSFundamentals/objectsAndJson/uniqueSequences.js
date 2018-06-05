function uniqueSequences(strArr) {
    let result=[];
    for(let line of strArr){
        line=JSON.parse(line);
        if(!compareArrs(line)){ //if false if diff
            result.push(line);
        }
    }

    result.sort(sorting);
    for(let i = 0; i < result.length; i++){
        let innerArr=result[i].sort((a,b)=>b-a);
        console.log('['+innerArr.join(', ')+']');
    }



       function sorting(a,b) {
           if(a.length>b.length){
               return 1
           }else if(a.length<b.length){
               return -1
           }else{
               return 0;
           }
       }



    function compareArrs(arr) { //compare for equalArrs
        for(let currArr in result){ //true and true
            if((arr.length===result[currArr].length) && (checkNums(result[currArr],arr))){
                    return true;
            }
        }
        return false;

        function checkNums(currArr,arr) { //true if equal
            for(let i = 0; i < currArr.length; i++){
               if(!arr.includes(currArr[i])){
                   return false;
               }
            }
            return true;

        }
    }

}
// uniqueSequences([
//     '[1,2,3,4,5]',
//     '[5,3,2]',
//     '[4,5,3,2,1]'
//
// ]);
//
// uniqueSequences([
//         '[-3, -2, -1, 0, 1, 2, 3, 4]',
//         '[10, 1, -17, 0, 2, 13]',
//         '[4, -3, 3, -2, 2, -1, 1, 0]'
// ]);

uniqueSequences([
        '[7.14, 7.180, 7.339, 80.099]',
        '[7.339, 80.0990, 7.140000, 7.18]',
        '[7.339, 7.180, 7.14, 80.099]'
]);