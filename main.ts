function lengthAfterTransformations(s: string, t: number): number {
    let MOD: number = 1000000007;
    let n: number = s.length;
    let cnt: number[] = new Array(26).fill(0);
    for (let i: number = 0; i < n; i++) {
        cnt[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    let ans: number = 0;
    for (let round: number = 0; round < t; round++) {
         let nxt: number[] = new Array(26).fill(0);
         nxt[0] = cnt[25];
         nxt[1] = (cnt[25] + cnt[0]) % MOD;
         for (let i: number = 2; i < 26; i++) {
             nxt[i] = cnt[i - 1];
         }
         cnt = nxt;
    }
    for (let i: number = 0; i < 26; i++) {
        ans = (ans + cnt[i]) % MOD;
    }
    console.log(ans);
    return ans;
};

lengthAfterTransformations("abcyy",2);
lengthAfterTransformations("azbk",1);
