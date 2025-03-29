"use strict";
function maximumScore(nums, k) {
    let MOD = 10e9 + 7;
    const power = (base, exponent) => {
        let res = 1;
        while (exponent > 0) {
            if (exponent % 2 === 1) {
                res = (res * base) % MOD;
            }
            base = (base * base) % MOD;
            exponent = Math.floor(exponent / 2);
        }
        return res;
    };
    const getPrimes = (limit) => {
        const isPrime = new Array(limit + 1).fill(true);
        const primes = new Set();
        for (let num = 2; num <= limit; num++) {
            if (!isPrime[num])
                continue;
            primes.add(num);
            for (let multiple = num * num; multiple <= limit; multiple += num) {
                isPrime[multiple] = false;
            }
        }
        return primes;
    };
    let N = nums.length;
    const primeScores = new Array(N).fill(0);
    let maxElement = Math.max(...nums);
    const primes = getPrimes(maxElement);
    for (let i = 0; i < N; i++) {
        let num = nums[i];
        for (let prime of primes) {
            if (prime * prime > num)
                break;
            if (num % prime !== 0)
                continue;
            primeScores[i]++;
            while (num % prime === 0) {
                num = Math.floor(num / prime);
            }
        }
        if (num > 1)
            primeScores[i]++;
    }
    let nextDominant = new Array(N).fill(N);
    let prevDominant = new Array(N).fill(-1);
    const decreasingPrimeScoreStack = new Array();
    for (let i = 0; i < N; i++) {
        while (decreasingPrimeScoreStack.length !== 0 &&
            primeScores[decreasingPrimeScoreStack[decreasingPrimeScoreStack.length - 1]] < primeScores[i]) {
            let topIndex = decreasingPrimeScoreStack.pop();
            //console.log(`top Index: ${topIndex}`);
            if (typeof topIndex === "number") {
                nextDominant[topIndex] = i;
            }
        }
        if (decreasingPrimeScoreStack.length !== 0) {
            prevDominant[i] = decreasingPrimeScoreStack[decreasingPrimeScoreStack.length - 1];
        }
        decreasingPrimeScoreStack.push(i);
    }
    const numOfSubArrays = new Array(N);
    for (let i = 0; i < N; i++) {
        numOfSubArrays[i] = (nextDominant[i] - i) * (i - prevDominant[i]);
    }
    const sortedArray = new Array();
    for (let i = 0; i < N; i++) {
        sortedArray.push([nums[i], i]);
    }
    sortedArray.sort((a, b) => b[0] - a[0]);
    //console.log(sortedArray);
    let score = 1;
    let processingIndex = 0;
    //console.log(`numOfSubArrays: ${numOfSubArrays}`);
    while (k > 0) {
        let element = sortedArray[processingIndex++];
        let num = element[0];
        let index = element[1];
        //console.log(`num: ${num}`);
        //console.log(`index: ${index}`);
        let operations = Math.min(k, numOfSubArrays[index]);
        //console.log(`operations: ${operations}`);
        //console.log(`score = ${score} * power(${num}, ${operations}) % MOD`);
        score = (score * power(num, operations)) % MOD;
        //console.log(`score: ${score}`);
        //console.log(`operations: ${operations}`);
        k -= operations;
    }
    console.log(score);
    return score;
}
;
maximumScore([8, 3, 9, 3, 8], 2);
maximumScore([19, 12, 14, 6, 10, 18], 3);
maximumScore([3289, 2832, 14858, 22011], 6);
