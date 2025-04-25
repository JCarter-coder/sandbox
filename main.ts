function countInterestingSubarrays(nums: number[], modulo: number, k: number): number {
    const N = nums.length;
    const countMap = new Map<number, number>();
    let result = 0;
    let prefix = 0;
    countMap.set(0, 1);
    for (let i = 0; i < N; i++) {
        prefix += nums[i] % modulo === k ? 1 : 0;
        result += countMap.get((prefix - k + modulo) % modulo) || 0;
        countMap.set(prefix % modulo, (countMap.get(prefix % modulo) || 0) + 1);
    }
    console.log(result);
    return result;
};

countInterestingSubarrays([3,2,4],2,1);
countInterestingSubarrays([3,1,9,6],3,0);
