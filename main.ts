function getFinalState(nums: number[], k: number, multiplier: number): number[] {
    const N = nums.length;

    for (let j = 0; j < k; j++) {
        let minIndex: number = 0;
        for (let i = 0; i < N; i++) {
            if (nums[i] < nums[minIndex]) minIndex = i;
        }

        nums[minIndex] *= multiplier;
    }
    
    console.log(nums)
    return nums;
};

getFinalState([2,1,3,5,6],5,2);
getFinalState([1,2],3,4);
getFinalState([1,3,5],5,3);
