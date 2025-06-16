function maximumDifference(nums: number[]): number {
    let maxDiff = -1;
    let minNum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > minNum) {
            maxDiff = Math.max(maxDiff, nums[i] - minNum);
        } else {
            minNum = nums[i];
        }
    }
    console.log(maxDiff);
    return maxDiff;
};

maximumDifference([7,1,5,4]);
maximumDifference([9,4,3,2]);
maximumDifference([1,5,2,10]);
