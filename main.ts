function numOfSubarrays(arr: number[]): number {
    let MOD = 10**9 + 7;
    let count = 0;
    let prefixSum = 0;
    let oddCount = 0;
    let evenCount = 1;

    for (let num of arr) {
        prefixSum += num;
        if (prefixSum % 2 === 0) {
            count += oddCount;
            evenCount++;
        } else {
            count += evenCount;
            oddCount++
        }

        count %= MOD;
    }

    console.log(count);
    return count;
};

numOfSubarrays([1,3,5]);
numOfSubarrays([2,4,6]);
numOfSubarrays([1,2,3,4,5,6,7]);
