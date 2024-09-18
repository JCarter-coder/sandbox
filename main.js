/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums = JSON.stringify(nums).slice(1,-1).split(',');
    nums.sort((a,b) => {
        const concat1 = a.concat(b);
        const concat2 = b.concat(a);
        if (concat1 > concat2) return -1
        else return 1
    });
    if (nums[0] === "0") {
        console.log("0");
        return "0";
    }
    console.log(nums.join('')); 
};

largestNumber([10,2]);
largestNumber([3,30,34,5,9]);
largestNumber([0,0]);
