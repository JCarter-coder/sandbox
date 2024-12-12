function lengthOfLongestSubstring(s: string): number {
    let N = s.length
    const charToNextIndex = new Map();
    let start: number = 0;
    let maxLength: number = 0;

    for (let end = 0; end < N; end++) {
        if (charToNextIndex.has(s.charAt(end))) {
            start = Math.max(charToNextIndex.get(s.charAt(end)), start);
        }
        maxLength = Math.max(maxLength, end - start + 1);
        charToNextIndex.set(s.charAt(end), end + 1);
    }

    console.log(maxLength);
    return maxLength;
};

lengthOfLongestSubstring("abcabcbb");
lengthOfLongestSubstring("bbbbb");
lengthOfLongestSubstring("pwwkew");
lengthOfLongestSubstring("aabaab!bb");



