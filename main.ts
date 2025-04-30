function countSubarrays(nums: number[], k: number): number {
    let maxElement = Math.max(...nums);
    let result = 0n;
    let start = 0n;
    let maxElementInWindow = 0;

    for (let end = 0; end < nums.length; end++) {
        if (nums[end] === maxElement) {
            maxElementInWindow++;
        }
        while (maxElementInWindow === k) {
            if (nums[Number(start)] === maxElement) {
                maxElementInWindow--;
            }
            start++;
        }
        result += start;
    }
    console.log(Number(result));
    return Number(result);
};

countSubarrays([1,3,2,3,3],2);
countSubarrays([1,4,2,1],3);
