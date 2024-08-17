var uniqueOccurrences = function(arr) {
    const seen = {};
    for (let num of arr) {
        if (Object.hasOwn(seen, num)) seen[num]++;
        else seen[num] = 1;
    }

    const freqs = Object.values(seen).sort((a,b) => a - b);

    for (let i = 1; i < freqs.length; i++) {
        if (freqs[i] === freqs[i - 1]) {
            console.log(false);
            return;
        }
    }

    console.log(true);
};

uniqueOccurrences([1,2,2,1,1,3]);
uniqueOccurrences([1,2]);
uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]);
