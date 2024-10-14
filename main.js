/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function(nums, k) {
    let pq = new MaxPriorityQueue();
    for (let num of nums) {
        pq.enqueue(num);
    }
    let result = 0;
    while (k > 0 && !pq.isEmpty()) {
        let largest = pq.dequeue().element;
        result += largest;
        let newNum = Math.ceil(largest / 3);
        if (newNum > 0) pq.enqueue(newNum);
        k--;
    }
    console.log(result);
};

maxKelements([10,10,10,10,10],5);
maxKelements([1,10,3,3,3],3);
