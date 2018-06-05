function userNames(strArr) {
    let set=new Set();
    for(let item of strArr){
        set.add(item);
    }
    let arr=Array.from(set);
    arr.sort(sortByTwoCriterian);
    console.log(arr.join('\n'));

    function sortByTwoCriterian(a,b){
        if(a.length>b.length){
            return 1;
        }else if(a.length<b.length){
            return -1;
        }else{
            return a.localeCompare(b);
        }
    }
}

userNames([
    'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston'
]);