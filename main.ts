function distinctNumbers(nums: number[], k: number): number[] {
    const N: number = nums.length;
    const result: number[] = new Array(N - k + 1);
    const freqMap = new Map();

    for (let i = 0; i < k; i++) {
        freqMap.set(nums[i], freqMap.get(nums[i]) + 1 || 1);
    }

    result[0] = freqMap.size;

    for (let i = k; i < N; i++) {
        let leftNum = nums[i - k];
        freqMap.set(leftNum, freqMap.get(leftNum) - 1);
        if (freqMap.get(leftNum) === 0) freqMap.delete(leftNum);

        let rightNum = nums[i];
        freqMap.set(rightNum, freqMap.get(rightNum) + 1 || 1);

        result[i - k + 1] = freqMap.size;
    }

    console.log(result);
    return result;
};

distinctNumbers([1,2,3,2,2,1,3],3);
distinctNumbers([1,1,1,1,2,3,4],4);
