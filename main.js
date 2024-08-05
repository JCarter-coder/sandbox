var kthDistinct = function(arr, k) {
    const freqMap = new Map();
    for (let str of arr) {
        freqMap.set(str, freqMap.get(str) + 1 || 1);
    }
    for (let str of arr) {
        if (freqMap.get(str) === 1) k--;
        if (k === 0) {
            console.log(str);
            return str;
        }
    }
    console.log("");
};

kthDistinct(["d","b","c","b","c","a"],2);
kthDistinct(["aaa","aa","a"],1);
kthDistinct(["a","b","a"],3);
