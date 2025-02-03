function longestMonotonicSubarray(nums: number[]): number {
    const N: number = nums.length;
    let result: number = 1;
    let dec: number = 1;
    let inc: number = 1;

    for (let i = 1; i < N; i++) {
        if (nums[i - 1] < nums[i]) {
            inc++;
            dec = 1;
        } else if (nums[i - 1] > nums[i]) {
            inc = 1;
            dec++;
        } else {
            inc = 1;
            dec = 1;
        }
        result = Math.max(result, Math.max(inc, dec));
    }

    console.log(result);
    return result;
};

longestMonotonicSubarray([1,4,3,3,2]);
longestMonotonicSubarray([3,3,3,3]);
longestMonotonicSubarray([3,2,1]);
longestMonotonicSubarray([1,9,7,1]);
