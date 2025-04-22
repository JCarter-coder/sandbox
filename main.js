"use strict";
function idealArrays(n, maxValue) {
    let MOD = BigInt(1e9 + 7);
    let MAX_N = 10010;
    let MAX_P = 15;
    const c = Array.from({ length: (MAX_N + MAX_P) }, () => Array(MAX_P + 1).fill(0));
    const sieve = new Array(MAX_N).fill(0);
    const ps = Array.from({ length: MAX_N }, () => []);
    for (let i = 2; i < MAX_N; i++) {
        if (sieve[i] === 0) {
            for (let j = i; j < MAX_N; j += i) {
                if (sieve[j] === 0) {
                    sieve[j] = i;
                }
            }
        }
    }
    for (let i = 2; i < MAX_N; i++) {
        let x = i;
        while (x > 1) {
            let p = sieve[x];
            let cnt = 0;
            while (x % p === 0) {
                x = Math.floor(x / p);
                cnt++;
            }
            ps[i].push(cnt);
        }
    }
    c[0][0] = 1;
    for (let i = 1; i < MAX_N + MAX_P; i++) {
        c[i][0] = 1;
        for (let j = 1; j <= Math.min(i, MAX_P); j++) {
            c[i][j] = (c[i - 1][j] + c[i - 1][j - 1]) % Number(MOD);
        }
    }
    //solution
    let ans = 0n;
    for (let i = 1; i <= maxValue; i++) {
        let mul = 1n;
        for (let p of ps[i]) {
            mul = (mul * BigInt(c[n + p - 1][p])) % MOD;
        }
        ans = (ans + mul) % MOD;
    }
    console.log(Number(ans));
    return Number(ans);
}
;
idealArrays(2, 5);
idealArrays(5, 3);
