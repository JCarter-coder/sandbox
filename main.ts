function canPermutePalindrome(s: string): boolean {
    const dp: number[] = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        dp[s.charCodeAt(i) - 97]++;
    }

    let oddCharCount = 0;
    dp.forEach((charCount) => {
        if (charCount % 2 === 1) oddCharCount++;
    });

    if (oddCharCount <= 1) return true;
    else return false;
};

canPermutePalindrome("code");
canPermutePalindrome("aab");
canPermutePalindrome("carerac");
