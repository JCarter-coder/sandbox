var MyCalendarTwo = function() {
    this.bookings = [];
    this.overlaps = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function(start, end) {
    for (let event of this.overlaps) {
        let [existingStart, existingEnd] = event;
        if (start < existingEnd && end > existingStart) {
            return false;
        }
    }
    for (let event of this.bookings) {
        let [existingStart, existingEnd] = event;
        if (start < existingEnd && end > existingStart) {
            this.overlaps.push(
                [
                    Math.max(existingStart, start),
                    Math.min(existingEnd, end)
                ]
            );
        }
    }
    this.bookings.push([start, end]);
    return true;
};

/** 
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */