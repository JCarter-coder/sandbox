function maximumBeauty(nums: number[], k: number): number {
    nums.sort((a,b) => a - b);
    let right: number = 0;
    let maxBeauty: number = 0;

    for (let left = 0; left < nums.length; left++) {
        while (right < nums.length && nums[right] - nums[left] <= 2 * k) {
            right++;
        }

        maxBeauty = Math.max(maxBeauty, right - left);
    }
    console.log(maxBeauty);
    return maxBeauty;
};

maximumBeauty([4,6,1,2],2);
maximumBeauty([1,1,1,1],10);
