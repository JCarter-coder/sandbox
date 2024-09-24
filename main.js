/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function(arr1, arr2) {
    let prefixMap = new Map();

    for (let num of arr1) {
        let strNum = num.toString();
        let prefix = "";
        for (let ch of strNum) {
            prefix += ch;
            prefixMap.set(prefix, (prefixMap.get(prefix) || 0) + 1);
        }
    }

    let maxLength = 0;
    
    for (let num of arr2) {
        let strNum = num.toString();
        let prefix = "";
        for (let ch of strNum) {
            prefix += ch;
            if (prefixMap.has(prefix)) {
                maxLength = Math.max(maxLength, prefix.length);
            }
        }
    }

    console.log(maxLength);
};

longestCommonPrefix([1,10,100],[1000]);
longestCommonPrefix([1,2,3],[4,4,4]);
longestCommonPrefix([10],[17,11]);
longestCommonPrefix([13,42,41],[40,15,37]);
