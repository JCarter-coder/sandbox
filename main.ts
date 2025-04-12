function countGoodIntegers(n: number, k: number): number {
    const hashSet = new Set<string>();
    let base = Math.pow(10, Math.floor((n - 1) / 2));
    let skip = n & 1;

    for (let i = base; i < base * 10; i++) {
        let s = i.toString();
        s += s.split('').reverse().slice(skip).join('');
        const palindromicInteger = parseInt(s);
        if (palindromicInteger % k === 0) {
            const sortedS = s.split('').sort().join('');
            hashSet.add(sortedS);
        }
    }

    const factorial: bigint[] = new Array(n + 1).fill(1n);
    for (let i = 1; i <= n; i++) {
        factorial[i] = BigInt(i) * factorial[i - 1];
    }
    let ans = 0n;
    for (const s of hashSet) {
        const count = Array(10).fill(0);
        for (const c of s) {
            count[parseInt(c)]++;
        }
        let total = BigInt(n - count[0]) * factorial[n - 1];
        for (const x of count) {
            total /= factorial[x];
        }
        ans += total;
    }

    console.log(Number(ans));
    return Number(ans);
};

countGoodIntegers(3,5);
countGoodIntegers(1,4);
countGoodIntegers(5,6);
countGoodIntegers(2,1);
