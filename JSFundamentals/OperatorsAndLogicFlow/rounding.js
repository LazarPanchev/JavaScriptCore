function rounding(nums) {
    let number=nums[0];
    let precision=nums[1];
    if(precision>15){
        precision=15;
    }
    let result=number.toFixed(precision);

    console.log(Number(result));
}

rounding([3.1415926535897932384626433832795, 2]);
rounding([10.5, 3]);