function countPalindromicSubsequence(s: string): number {
    const first: number[] = new Array(26).fill(-1);
    const last: number[] = new Array(26);

    for (let i = 0; i < s.length; i++) {
        let curr = s.charCodeAt(i) - 97;
        if (first[curr] === -1) first[curr] = i;

        last[curr] = i;
    }

    let ans: number = 0;
    for (let i = 0; i < 26; i++) {
        if (first[i] === -1) continue;

        const between = new Set();
        for (let j = first[i] + 1; j < last[i]; j++) {
            between.add(s.charAt(j));
        }
        ans += between.size;
    }
    
    console.log(ans);
    return ans;
};

countPalindromicSubsequence("aabca");
countPalindromicSubsequence("adc");
countPalindromicSubsequence("bbcbaba");
