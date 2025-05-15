function getLongestSubsequence(words: string[], groups: number[]): string[] {
    let ans: string[] = [];
    let n = words.length;
    for (let i = 0; i < n; i++) {
        if (i === 0 || groups[i] !== groups[i - 1]) {
            ans.push(words[i]);
        }
    }
    console.log(ans);
    return ans;
};

getLongestSubsequence(["c"],[0]);
getLongestSubsequence(["d"],[1]);
