function findMaxConsecutiveOnes(nums: number[]): number {
    let index: number = 0;
    let zeroSeen: boolean = false;
    let prevZeroIndex: number = 0;
    let maxResult: number = 0;

    let currentMax: number = 0;
    while (index < nums.length) {
        if (nums[index] === 0 && zeroSeen === false) {
            zeroSeen = true;
            prevZeroIndex = index;
        } else if (nums[index] === 0 && zeroSeen === true) {
            currentMax = index - prevZeroIndex - 1;
            prevZeroIndex = index;
        }
        currentMax++;
        maxResult = Math.max(maxResult, currentMax);
        index++;
    }

    console.log(maxResult);
    return maxResult;
};

findMaxConsecutiveOnes([1,0,1,1,0]);
findMaxConsecutiveOnes([1,0,1,1,0,1]);
