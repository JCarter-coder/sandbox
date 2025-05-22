import { MaxPriorityQueue } from "./node_modules/datastructures-js/index.js";
function maxRemoval(nums, queries) {
    queries.sort((a, b) => a[0] - b[0]);
    const heap = new MaxPriorityQueue();
    const deltaArray = new Array(nums.length + 1).fill(0);
    let operations = 0;
    for (let i = 0, j = 0; i < nums.length; i++) {
        operations += deltaArray[i];
        while (j < queries.length && queries[j][0] === i) {
            heap.push(queries[j][1]);
            j++;
        }
        while (operations < nums[i] && !heap.isEmpty() && heap.front() >= i) {
            operations++;
            deltaArray[heap.pop() + 1]--;
        }
        if (operations < nums[i]) {
            console.log(-1);
            return -1;
        }
    }
    console.log(heap.size());
    return heap.size();
}
;
maxRemoval([2, 0, 2], [[0, 2], [0, 2], [1, 1]]);
maxRemoval([1, 1, 1, 1], [[1, 3], [0, 2], [1, 3], [1, 2]]);
maxRemoval([1, 2, 3, 4], [[0, 3]]);
