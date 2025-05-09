const MOD = BigInt(1000000007);

function countBalancedPermutations(num: string): number {
    let result: number = 0;
    const n = num.length;
    const count: number[] = new Array(10).fill(0);
    for (const ch of num) {
        const d = parseInt(ch);
        count[d]++;
        result += d;
    }
    if (result % 2 !== 0) {
        console.log(0);
        return 0;
    }
    const target = result / 2;
    const maxOdd = Math.floor((n + 1) / 2);
    const comb: bigint[][] = new Array(maxOdd + 1);
    for (let i = 0; i <= maxOdd; i++) {
        comb[i] = new Array(maxOdd + 1).fill(0n);
        comb[i][i] = comb[i][0] = 1n;
        for (let j = 1; j < i; j++) {
            comb[i][j] = (comb[i - 1][j - 1] + comb[i - 1][j]) % MOD;
        }
    }
    const f: bigint[][] = Array.from(
        { length: Number(target) + 1}, 
        () => new Array(maxOdd + 1).fill(0n)
    );
    f[0][0] = 1n;
    let psum = 0;
    let totalSum = 0;
    for (let i = 0; i < 10; i++) {
        psum += count[i];
        totalSum += i * count[i];
        for (
            let oddCount = Math.min(psum, maxOdd);
            oddCount >= Math.max(0, psum - (n - maxOdd));
            oddCount--
        ) {
            const evenCount = psum - oddCount;
            for (
                let curr = Math.min(totalSum, target);
                curr >= Math.max(0, totalSum - target);
                curr--
            ) {
                let res = 0n;
                for (
                    let j = Math.max(0, count[i] - evenCount);
                    j <= Math.min(count[i], oddCount) && i * j <= curr;
                    j++
                ) {
                    const ways = (
                        comb[oddCount][j] * comb[evenCount][count[i] - j]
                    ) % MOD;
                    res = (res + ((ways * f[curr - i * j][oddCount - j]) % MOD)) % MOD;
                }
                f[curr][oddCount] = res % MOD;
            }
        }
    }
    console.log(f[target][maxOdd]);
    return Number(f[target][maxOdd]);
};

countBalancedPermutations("123");
countBalancedPermutations("112");
countBalancedPermutations("12345");
