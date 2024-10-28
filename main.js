/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function(nums) {
    let longestStreak = 0;
    const uniqueNumbers = new Set();
    for (let num of nums) {
        uniqueNumbers.add(num);
    }

    for (let startNumber of nums) {
        let currentStreak = 0;
        let current = startNumber;

        while (uniqueNumbers.has(current)) {
            currentStreak++;
            if (current * current > 1e5) break;
            current *= current;
        }

        longestStreak = Math.max(longestStreak, currentStreak);
    }

    console.log(longestStreak < 2 ? -1 : longestStreak);
};

longestSquareStreak([4,3,6,16,8,2]);
longestSquareStreak([2,3,5,6,7]);
