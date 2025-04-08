function minimumOperations(nums: number[]): number {
    const freqCount: { [key: number]: number } = {};
    for (let num of nums) {
        freqCount[num] === undefined ? (freqCount[num] = 1) : freqCount[num]++;
    }
    let index = 0;
    let result = 0;
    while (Object.values(freqCount).some((count) => count > 1)) {
        for (let i = index; i < index + 3 && i < nums.length; i++) {
            freqCount[nums[i]]--;
        }
        index += 3;
        result++;
    }
    console.log(result);
    return result;
};

minimumOperations([1,2,3,4,2,3,3,5,7]);
minimumOperations([4,5,6,4,4]);
minimumOperations([6,7,8,9]);
