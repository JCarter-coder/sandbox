function numberOfSubstrings(s: string): number {
    let N: number = s.length;
    let result: number = 0;
    const lastPos = [-1, -1, -1];

    for (let i = 0; i < N; i++) {
        lastPos[s.charCodeAt(i) - 97] = i;
        result += 1 + Math.min(
            lastPos[0],
            lastPos[1],
            lastPos[2]
        )
    }
    console.log(result);
    return result;
};

numberOfSubstrings("abcabc");
numberOfSubstrings("aaacb");
numberOfSubstrings("abc");
