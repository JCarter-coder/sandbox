function canJump(nums: number[]): boolean {
    let lastPosition: number = nums.length - 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (i + nums[i] >= lastPosition) lastPosition = i;
    }
    console.log(lastPosition === 0);
    return lastPosition === 0;
};

canJump([2,3,1,1,4]);
canJump([3,2,1,0,4]);
