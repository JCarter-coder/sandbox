function getMaximumXor(nums: number[], maximumBit: number): number[] {
    let xorProduct: number = 0;
    for (let i = 0; i < nums.length; i++) {
        xorProduct = xorProduct ^ nums[i];
    }
    const ans: number[] = new Array(nums.length);

    let mask: number = (1 << maximumBit) - 1;

    for (let i = 0; i < nums.length; i++) {
        ans[i] = xorProduct ^ mask;
        xorProduct = xorProduct ^ nums[nums.length - 1 - i];
    }

    console.log(ans);
    return ans;
};

getMaximumXor([0,1,1,3],2);
getMaximumXor([2,3,4,7],3);
getMaximumXor([0,1,2,2,5,7],3);
