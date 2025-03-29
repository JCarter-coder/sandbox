const Z = 1e5 + 1;
const primes: number[] = [];
const f = Array<boolean>(Z).fill(true);

// Find all primes <= Z using the Sieve of Eratosthenes method.
for (let i = 2; i < Z; i += i > 2 ? 2 : 1) {
    if (!f[i]) continue;
    primes.push(i);
    for (let j = i * i; j < Z; j += i) {
        f[j] = false;
    }
}

function getPrimeScore(x: number): number {
    let score = 0;
    for (const p of primes) {
        if (x % p === 0) ++score;
        else if (p > x) break;
    }
    return score;
}

const primeScores = Array.from({ length: Z }, (_, i) => getPrimeScore(i));

const BIG_MOD = BigInt(1_000_000_007);

function bigPow(x: bigint, n: bigint): bigint {
    let p = 1n;
    while (n > 0) {
        if (n & 1n) p = (p * x) % BIG_MOD;
        x = (x * x) % BIG_MOD;
        n /= 2n;
    }
    return p;
}

function maximumScore(nums: number[], k: number): number {
    const n = nums.length;
    
    const stack = [-1];
    
    const cnts = Array<number>(n).fill(0);

    for (let i = 0; i <= n; ++i) {
        const primeScore = i < n ? primeScores[nums[i]] : Infinity;

        let prevIdx = stack[stack.length - 1];
        while (stack.length > 1 && primeScores[nums[prevIdx]] < primeScore) {
            stack.pop();
            const prevPrevIdx = stack[stack.length - 1];
            cnts[prevIdx] = (i - prevIdx) * (prevIdx - prevPrevIdx);
            prevIdx = prevPrevIdx;
        }

        stack.push(i);
    }

    let ans = 1n;

    const indexes = nums.map((_, i) => i).sort((a, b) => nums[b] - nums[a]);
    for (const i of indexes) {
        const cnt = Math.min(cnts[i], k);
        ans = (ans * bigPow(BigInt(nums[i]), BigInt(cnt))) % BIG_MOD;
        k -= cnt;
        if (k === 0) break;
    }

    console.log(Number(ans));
    return Number(ans);
};

maximumScore([8,3,9,3,8],2);
maximumScore([19,12,14,6,10,18],3);
maximumScore([3289,2832,14858,22011],6);
