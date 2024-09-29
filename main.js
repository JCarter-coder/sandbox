
var AllOne = function() {
    this.keyCount = new Map();
};

/** 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function(key) {
    this.keyCount.set(key, (this.keyCount.get(key) || 0) + 1);
};

/** 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function(key) {
    if (this.keyCount.has(key) && this.keyCount.get(key) > 0) {
        this.keyCount.set(key, this.keyCount.get(key) - 1);
    }
};

/**
 * @return {string}
 */
AllOne.prototype.getMaxKey = function() {
    let maxKey = "";
    let maxCount = 0;
    for (const [key, count] of this.keyCount.entries()) {
        if (count > maxCount) {
            maxKey = key;
            maxCount = count;
        }
    }

    return maxKey;
};

/**
 * @return {string}
 */
AllOne.prototype.getMinKey = function() {
    let minKey = "";
    let minCount = Infinity;
    for (const [key, count] of this.keyCount.entries()) {
        if (count > 0 && count < minCount) {
            minKey = key;
            minCount = count;
        }
    }

    return minKey;
};

/** 
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */