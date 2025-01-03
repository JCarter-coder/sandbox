function waysToSplitArray(nums: number[]): number {
    let N: number = nums.length;
    let result: number = 0;
    let rightSum: number = 0;

    for (let i = 0; i < N; i++) {
        rightSum += nums[i];
    }

    let leftSum: number = 0;
    for (let i = 0; i < N - 1; i++) {
        leftSum += nums[i];
        rightSum -= nums[i];
        if (leftSum >= rightSum) result++;
    }
    
    console.log(result);
    return result;
};

waysToSplitArray([10,4,-8,7]);
waysToSplitArray([2,3,1,0]);
