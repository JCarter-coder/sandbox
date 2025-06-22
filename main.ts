function divideString(s: string, k: number, fill: string): string[] {
    const result: string[] = [];
    const n = s.length;
    for (let i = 0; i < n; i += k) {
        const part = s.slice(i, i + k);
        if (part.length < k) {
            result.push(part + fill.repeat(k - part.length));
        } else {
            result.push(part);
        }
    }
    console.log(result);
    return result;
};

divideString("abcdefghi", 3, "x"); // ["abc", "def", "ghi"]
divideString("abcdefghij", 3, "x"); // ["abc", "def", "ghi", "jxx"]