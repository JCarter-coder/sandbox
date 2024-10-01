/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function(arr, k) {
    const remainderCount = new Map();
    for (let num of arr) {
        let rem = ((num % k) + k) % k;
        remainderCount.set(rem, remainderCount.get(rem) + 1 || 1);
    }

    console.log(remainderCount);

    for (let num of arr) {
        let rem = ((num % k) + k) % k;
        if (rem === 0) {
            if (remainderCount.get(rem) % 2 !== 0) {
                console.log("false");
                return false;
            } 
        } else if (remainderCount.get(rem) !== remainderCount.get(k - rem)) {
            console.log("false");
            return false;
        }
    }
    console.log("true");
    return true;
};

canArrange([1,2,3,4,5,10,6,7,8,9],5);
canArrange([1,2,3,4,5,6],7);
canArrange([1,2,3,4,5,6],10);
