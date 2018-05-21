function distance3D(nums) {
    let x1=Number(nums[0]);
    let y1=Number(nums[1]);
    let z1=Number(nums[2]);
    let x2=Number(nums[3]);
    let y2=Number(nums[4]);
    let z2=Number(nums[5]);

    let diminsionX=Math.pow(x2-x1,2);
    let diminsionY=Math.pow(y2-y1,2);
    let diminsionZ=Math.pow(z2-z1,2);
    let distance=Math.sqrt(diminsionX+diminsionY+diminsionZ);
    console.log(distance);
}

distance3D([1, 1, 0, 5, 4, 0]);
distance3D([3.5, 0, 1, 0, 2, -1]);