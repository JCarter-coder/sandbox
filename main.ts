function lenLongestFibSubseq(arr: number[]): number {
    let N: number = arr.length;
    const dp: number[][] = Array.from(
        {length: N}, () => Array(N).fill(0)
    );
    let maxLen: number = 0;

    for (let curr = 2; curr < N; curr++) {
        let start = 0;
        let end = curr - 1;

        while (start < end) {
            let pairSum = arr[start] + arr[end];

            if (pairSum > arr[curr]) end--;
            else if (pairSum < arr[curr]) start++;
            else {
                dp[end][curr] = dp[start][end] + 1;
                maxLen = Math.max(dp[end][curr], maxLen);
                end--;
                start++;
            }
        }
    }
    console.log(maxLen === 0 ? 0 : maxLen + 2);
    return maxLen === 0 ? 0 : maxLen + 2;
};

lenLongestFibSubseq([1,2,3,4,5,6,7,8]);
lenLongestFibSubseq([1,3,7,11,12,14,18]);
