"use strict";
function lengthAfterTransformations(s, t) {
    let MOD = 1000000007;
    let n = s.length;
    let cnt = new Array(26).fill(0);
    for (let i = 0; i < n; i++) {
        cnt[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    let ans = 0;
    for (let round = 0; round < t; round++) {
        let nxt = new Array(26).fill(0);
        nxt[0] = cnt[25];
        nxt[1] = (cnt[25] + cnt[0]) % MOD;
        for (let i = 2; i < 26; i++) {
            nxt[i] = cnt[i - 1];
        }
        cnt = nxt;
    }
    for (let i = 0; i < 26; i++) {
        ans = (ans + cnt[i]) % MOD;
    }
    console.log(ans);
    return ans;
}
;
lengthAfterTransformations("abcyy", 2);
lengthAfterTransformations("azbk", 1);
