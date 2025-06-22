function minimumDeletions(word: string, k: number): number {
    const cnt = new Map<string, number>();
    for (const c of word) {
        cnt.set(c, (cnt.get(c) || 0) + 1);
    }
    let result = word.length;
    for (const a of cnt.values()) {
        let deleted = 0;
        for (const b of cnt.values()) {
            if (a > b) {
                deleted += b;
            }
            else if (b > a + k) {
                deleted += b - (a + k);
            }
        }
        result = Math.min(result, deleted);
    }
    console.log(result);
    return result;
};

minimumDeletions("aabcaba",0);
minimumDeletions("dabdcbdcdcd",2);
minimumDeletions("aaabaaa",2);
