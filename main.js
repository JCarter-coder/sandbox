var singleNumber = function(nums) {
    // difference between two numbers (x and y)
    // which were seen only once
    let bitmask = 0;
    for (let num of nums) {
        bitmask ^= num;
    }

    // rightmost 1-bit diff between x and y
    let diff = bitmask & (-bitmask);

    let x = 0;
    // bitmask which will contain only x
    for (let num of nums) {
        if ((num & diff) !== 0) {
            x ^= num;
        }
    }

    console.log([x, bitmask^x]);
};

singleNumber([1,2,1,3,2,5]);
singleNumber([-1,0]);
singleNumber([0,1]);
