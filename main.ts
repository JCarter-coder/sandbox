function smallestEquivalentString(s1: string, s2: string, baseStr: string): string {
    const representative: number[] = Array.from({ length: 26 }, (_, i) => i);
    const find = (x: number): number => {
        if (representative[x] === x) {
            return x;
        }
        return representative[x] = find(representative[x]);
    }
    const performUnion = (x: number, y: number): void => {
        x = find(x);
        y = find(y);
        if (x === y) {
            return;
        }
        if (x < y) {
            representative[y] = x;
        }
        else {
            representative[x] = y;
        }
    }
    for (let i = 0; i < s1.length; i++) {
        performUnion(s1.charCodeAt(i) - 'a'.charCodeAt(0), s2.charCodeAt(i) - 'a'.charCodeAt(0));
    }
    let ans = '';
    for (let i = 0; i < baseStr.length; i++) {
        ans += String.fromCharCode(find(baseStr.charCodeAt(i) - 'a'.charCodeAt(0)) + 'a'.charCodeAt(0));
    }
    console.log(ans);
    return ans;
};

smallestEquivalentString("parker", "morris", "parser"); // "morris"
smallestEquivalentString("hello", "world", "hold"); // "hdld"
smallestEquivalentString("leetcode", "programs", "sourcecode"); // "aauaaaaada"
