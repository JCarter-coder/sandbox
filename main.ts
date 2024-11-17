function shortestSubarray(nums: number[], k: number): number {
    let N: number = nums.length;
    const prefixSums = new Array(N + 1).fill(0);

    for (let i = 1; i <= N; i++) {
        prefixSums[i] = prefixSums[i - 1] + nums[i - 1];
    }

    let candidateIndices = new Array();

    let shortestSubarrayLength = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i <= N; i++) {
        while (
            candidateIndices.length !== 0 &&
            prefixSums[i] - prefixSums[candidateIndices[0]] >= k
        ) {
            shortestSubarrayLength = Math.min(
                shortestSubarrayLength,
                i - candidateIndices.shift()
            );
        }

        while (
            candidateIndices.length !== 0 &&
            prefixSums[i] <= prefixSums[candidateIndices[candidateIndices.length - 1]]
        ) {
            candidateIndices.pop();
        }

        candidateIndices.push(i);
    }

    console.log(
        shortestSubarrayLength === Number.MAX_SAFE_INTEGER 
        ? -1 
        : shortestSubarrayLength
    );

    return (
        shortestSubarrayLength === Number.MAX_SAFE_INTEGER 
        ? -1 
        : shortestSubarrayLength
    );
};

shortestSubarray([1],1);
shortestSubarray([1,2],4);
shortestSubarray([2,-1,2],3);
