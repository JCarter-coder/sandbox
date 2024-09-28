/**
 * @param {number} k
 */
var MyCircularDeque = function(k) {
    this.queue =[];
    this.maxi = k;
    this.n = 0;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if (this.n == this.maxi) return false;
    this.queue.unshift(value);
    this.n++;
    return true;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    if (this.queue.length == this.maxi) return false;
    this.queue.push(value);
    this.n++;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if (this.n > 0) {
        this.queue.shift();
        this.n--;
        return true;
    }
    return false;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if (this.queue.length > 0) {
        this.queue.pop();
        this.n--;
        return true;
    }
    return false;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    if (this.n > 0) return this.queue[0];
    return -1;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    if (this.n > 0) return this.queue[this.n - 1];
    return -1;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return this.n == 0;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return this.n == this.maxi;
};

/** 
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */