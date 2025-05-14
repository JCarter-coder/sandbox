let MOD = BigInt(1000000007);
let L = 26;

class Mat {
    a: bigint[][];

    constructor(copyFrom: Mat | null = null) {
        this.a = Array.from({ length: L }, 
            () => new Array(L).fill(BigInt(0))
        );
        
        if (copyFrom) {
            for (let i = 0; i < L; i++) {
                for (let j = 0; j < L; j++) {
                    this.a[i][j] = copyFrom.a[i][j];
                }
            }
        }
    }

    mul(other: Mat): Mat {
        const res = new Mat();
        for (let i = 0; i < L; i++) {
            for (let j = 0; j < L; j++) {
                for (let k = 0; k < L; k++) {
                    res.a[i][j] = (res.a[i][j] + this.a[i][k] * other.a[k][j]) % MOD;
                }
            }
        }
        return res;
    }
}

function I(): Mat {
    const m = new Mat();
    for (let i = 0; i < L; i++) {
        m.a[i][i] = 1n;
    }
    return m;
}

function quickMul(x: Mat, y: number): Mat {
    let res = I();
    let cur = new Mat(x);
    while (y > 0) {
        if (y & 1) {
            res = res.mul(cur);
        }
        cur = cur.mul(cur);
        y >>= 1;
    }
    return res;
}
    
function lengthAfterTransformations(s: string, t: number, nums: number[]): number {
    const T = new Mat();
    for (let i = 0; i < L; i++) {
        for (let j = 1; j <= nums[i]; j++) {
            T.a[(i + j) % L][i] = 1n;
        }
    }

    const res = quickMul(T, t);
    const f: bigint[] = new Array(L).fill(0n);
    for (const ch of s) {
        f[ch.charCodeAt(0) - "a".charCodeAt(0)] += 1n;
    }

    let ans = 0n;
    for (let i = 0; i < L; i++) {
        for (let j = 0; j < L; j++) {
            ans = (ans + res.a[i][j] * f[j]) % MOD;
        }
    }
    console.log(ans);
    return Number(ans);
};

lengthAfterTransformations(
    "abcyy",
    2,
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]
);
lengthAfterTransformations(
    "azbk",
    1,
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
);
