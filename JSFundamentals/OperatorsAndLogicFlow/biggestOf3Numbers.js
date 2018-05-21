function bigestNum(arr) {
    [arr[0],arr[1],arr[2]]=[arr[0],arr[1],arr[2]].map(Number);
    let biggestNum=Math.max(arr[0],arr[1],arr[2]);
    console.log(biggestNum);

    //another solution
    // function bigestNum(arr) {
    //     let firstNum=arr[0];
    //     let secondNum=arr[1];
    //     let thirdNum=arr[2];
    //     let biggestNum=Math.max(firstNum,Math.max(secondNum,thirdNum));
    //     console.log(biggestNum);
    //
    // }
}

bigestNum([5,-2,7]);