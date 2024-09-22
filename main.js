/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(n, k) {
    let currentNumber = 1;
    k--;

    let countSteps = (n, prefix1, prefix2) => {
        let steps = 0;
        while (prefix1 <= n) {
            steps += Math.min(n + 1, prefix2) - prefix1;
            prefix1 *= 10;
            prefix2 *= 10;
        }
        return steps;
    }

    while (k > 0) {
        let step = countSteps(n, currentNumber, currentNumber + 1);
        if (step <= k) {
            currentNumber++;
            k -= step;
        } else {
            currentNumber *= 10;
            k--;
        }
    }

    console.log(currentNumber);
};

findKthNumber(13,2);
findKthNumber(1,1);
