function threeSum(nums: number[]): number[][] {
    nums.sort((a,b) => a - b);
    const answer: number[][] = new Array();

    const twoSumII = (
        nums: number[],
        i: number,
        answer: number[][]
    ): void => {
        let lo: number = i + 1;
        let hi: number = nums.length - 1;
        while (lo < hi) {
            let sum: number = nums[i] + nums[lo] + nums[hi];
            if (sum < 0) {
                ++lo;
            } else if (sum > 0) {
                --hi;
            } else {
                answer.push([nums[i],nums[lo++],nums[hi--]]);
                while (lo < hi && nums[lo] === nums[lo - 1]) {
                    ++lo;
                }
            }
        }
    }

    for (let i = 0; i < nums.length && nums[i] <= 0; ++i) {
        if (i === 0 || nums[i - 1] !== nums[i]) {
            twoSumII(nums, i, answer);
        }
    }

    console.log(answer);
    return answer;
};

threeSum([-1,0,1,2,-1,-4]);
threeSum([0,1,1]);
threeSum([0,0,0]);
