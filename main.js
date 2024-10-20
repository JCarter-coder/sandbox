/**
 * @param {number[]} nums
 */
var FirstUnique = function(nums) {
    this.queue = nums;
    this.container = {};
    for (let num of nums) {
        if (!this.container[num]) this.container[num] = 1;
        else this.container[num]++;
    }
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function() {
    for (let num of this.queue) {
        if (this.container[num] === 1) return num;
    }
    return -1;
};

/** 
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function(value) {
    this.queue.push(value)
    if (!this.container[value]) this.container[value] = 1;
    else this.container[value]++;
};

/** 
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */