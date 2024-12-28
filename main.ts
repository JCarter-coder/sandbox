function maxSumOfThreeSubarrays(nums: number[], k: number): number[] {
    let bestSingleStart: number = 0;
    const bestDoubleStart: number[] = [0, k];
    const bestTripleStart: number[] = [0, k, k*2];

    // compute initial sums of first three subarrays
    let currentWindowSumSingle: number = 0;
    for (let i = 0; i < k; i++) {
        currentWindowSumSingle += nums[i];
    }

    let currentWindowSumDouble: number = 0;
    for (let i = k; i < k * 2; i++) {
        currentWindowSumDouble += nums[i];
    }

    let currentWindowSumTriple: number = 0;
    for (let i = k * 2; i < k * 3; i++) {
        currentWindowSumTriple += nums[i];
    }

    // Track best sums so far
    let bestSingleSum = currentWindowSumSingle;
    let bestDoubleSum = (
        currentWindowSumSingle + currentWindowSumDouble
    );
    let bestTripleSum = (
        currentWindowSumSingle + 
        currentWindowSumDouble +
        currentWindowSumTriple
    );

    // pointers for the subarrays
    let singleStartIndex: number = 1;
    let doubleStartIndex: number = k + 1;
    let tripleStartIndex: number = k * 2 + 1;

    while (tripleStartIndex <= nums.length - k) {
        // update the sums using the sliding window technique
        currentWindowSumSingle = (
            currentWindowSumSingle - 
            nums[singleStartIndex - 1] +
            nums[singleStartIndex + k - 1]
        );
        currentWindowSumDouble = (
            currentWindowSumDouble -
            nums[doubleStartIndex - 1] +
            nums[doubleStartIndex + k - 1]
        );
        currentWindowSumTriple = (
            currentWindowSumTriple - 
            nums[tripleStartIndex - 1] +
            nums[tripleStartIndex + k - 1]
        );

        if (currentWindowSumSingle > bestSingleSum) {
            bestSingleStart = singleStartIndex;
            bestSingleSum = currentWindowSumSingle;
        }

        if (currentWindowSumDouble + bestSingleSum > bestDoubleSum) {
            bestDoubleStart[0] = bestSingleStart;
            bestDoubleStart[1] = doubleStartIndex;
            bestDoubleSum = currentWindowSumDouble + bestSingleSum;
        }

        if (currentWindowSumTriple + bestDoubleSum > bestTripleSum) {
            bestTripleStart[0] = bestDoubleStart[0];
            bestTripleStart[1] = bestDoubleStart[1];
            bestTripleStart[2] = tripleStartIndex;
            bestTripleSum = currentWindowSumTriple + bestDoubleSum;
        }

        singleStartIndex++;
        doubleStartIndex++;
        tripleStartIndex++;
    }

    console.log(bestTripleStart);
    return bestTripleStart;
};

maxSumOfThreeSubarrays([1,2,1,2,6,7,5,1],2);
maxSumOfThreeSubarrays([1,2,1,2,1,2,1,2,1],2);
