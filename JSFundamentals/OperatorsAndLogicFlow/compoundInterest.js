function compoundInterest(nums) {
    let principalSum=Number(nums[0]);
    let interestRatePercent=Number(nums[1])/100;
    let compoundingPeriodMonths=12 / Number(nums[2]);
    let totalTimespanYears=Number(nums[3]);

    let f=principalSum*Math.pow(1+interestRatePercent/compoundingPeriodMonths,compoundingPeriodMonths*totalTimespanYears)

    console.log(f.toFixed(2));
}

compoundInterest([1500, 4.3, 3, 6]);
compoundInterest([100000, 5, 12, 25]);