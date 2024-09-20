/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    let xorResult = start ^ goal;
    let count = 0;

    while (xorResult != 0) {
        xorResult &= (xorResult - 1);
        count++;
    }

    console.log(count);
};

minBitFlips(10,7);
minBitFlips(3,4);
