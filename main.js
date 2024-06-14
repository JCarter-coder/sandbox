var minIncrementForUnique = function(nums) {
    let N = nums.length;
    let max = 0;
    let minIncrements = 0;

    for (let val of nums) {
        max = Math.max(max, val);
    }

    const freqCount = new Array(N + max).fill(0);

    for (let val of nums) {
        freqCount[val]++;
    }

    for (let i = 0; i < freqCount.length; i++) {
        if (freqCount[i] <= 1) continue;
        let duplicates = freqCount[i] - 1;
        freqCount[i + 1] += duplicates;
        freqCount[i] = 1;
        minIncrements += duplicates;
    }

    console.log(minIncrements);
};

minIncrementForUnique([1,2,2]);
minIncrementForUnique([3,2,1,2,1,7]);
