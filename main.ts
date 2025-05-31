function numTilings(n: number): number {
    let MOD = BigInt(1e9 + 7);
    const SQ_MATRIX: bigint[][]= [
        [1n,1n,2n],
        [1n,0n,0n],
        [0n,1n,1n]
    ];
    let SIZE = 3;
    const cache = new Map<number, bigint[][]>();

    const matrixProduct = (
        m1: bigint[][],
        m2: bigint[][]
    ): bigint[][] => {
        const ans: bigint[][] = Array.from({ length: SIZE }, () => Array(SIZE).fill(0));
        for (let row = 0; row < SIZE; row++) {
            for (let col = 0; col < SIZE; col++) {
                let sum: bigint = 0n;
                for (let k = 0; k < SIZE; k++) {
                    sum = (sum + m1[row][k] * m2[k][col]) % MOD;
                }
                ans[row][col] = sum;
            }
        }
        return ans;
    }

    const matrixExpo = (n: number): bigint[][] => {
        if (cache.has(n)) {
            return cache.get(n)!;
        }
        let cur: bigint[][];
        if (n === 1) {
            cur = SQ_MATRIX;
        } else if (n % 2 === 1) {
            cur = matrixProduct(matrixExpo(n - 1), SQ_MATRIX);
        } else {
            cur = matrixProduct(matrixExpo(Math.floor(n / 2)), matrixExpo(Math.floor(n / 2)));
        }
        cache.set(n, cur);
        return cur;
    }

    if (n <= 2) {
        console.log(n);
        return n;
    }
    let ans: bigint[] = matrixExpo(n - 2)[0];
    let result = Number((ans[0] * 2n + ans[1] + ans[2]) % MOD);
    console.log(result);
    return result;
};

numTilings(3);
numTilings(1);
numTilings(60);
