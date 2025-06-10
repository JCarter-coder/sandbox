function maxDifference(s: string): number {
    const charCount: { [key: string]: number } = {};
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    const counts = Object.values(charCount);
    if (counts.length < 2) {
        console.log(0);
        return 0;
    }
    const evenCount: number[] = [...counts].filter((count) => count % 2 === 0);
    const oddCount: number[] = [...counts].filter((count) => count % 2 === 1);
    const difference = Math.max(...oddCount) - Math.min(...evenCount);

    console.log(difference);
    return difference;
};

maxDifference("aaaaabbc");
maxDifference("abcabcab");
maxDifference("tzt");
