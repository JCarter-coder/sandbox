var uniqueOccurrences = function(arr) {
    const freq = new Map();
    for (let num of arr) {
        freq.set(num, freq.get(num) + 1 || 1);
    }

    const freqSet = new Set(freq.values())

    // If set size equals map size, then
    // frequency counts are unique
    console.log(freq.size == freqSet.size);
};

uniqueOccurrences([1,2,2,1,1,3]);
uniqueOccurrences([1,2]);
uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]);
