var longestSubarray = function(nums) {
    let maxVal = 0;
    let ans = 0;
    let currentStreak = 0;

    for (let num of nums) {
        if (maxVal < num) {
            maxVal = num;
            ans = currentStreak = 0;
        }

        if (maxVal === num) currentStreak++;
        else currentStreak = 0;

        ans = Math.max(ans, currentStreak);
    }

    console.log(ans);
};

longestSubarray([1,2,3,3,2,2]);
longestSubarray([1,2,3,4]);
