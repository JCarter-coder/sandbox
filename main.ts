function countSubarrays(nums: number[]): number {
    const N = nums.length;
    let result = 0;
    for (let i = 1; i < N - 1; i++) {
        if (nums[i] === ((nums[i - 1] + nums[i + 1]) * 2)) {
            result++;
        }
    }
    console.log(result);
    return result;
};

countSubarrays([1,2,1,4,1]);
countSubarrays([1,1,1]);
countSubarrays([0,0,0,0]);
