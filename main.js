/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
    let stackSize = 0;
    for (let i = 0; i < s.length; i++) {
        let ch = s.charAt(i);
        if (ch === '[') stackSize++;
        else if (stackSize > 0) stackSize--;
    }
    console.log(Math.floor((stackSize + 1)/2));
};

minSwaps("][][");
minSwaps("]]][[[");
minSwaps("[]");
