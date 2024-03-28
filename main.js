/* class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = (next===undefined ? null : next);
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(val, next) {
        let newNode = new ListNode(val, next);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }
    
    turnArrayToList(arr) {
        for (let i = 0; i < arr.length; i++) {
            this.add(arr[i]);
        }
        //console.log(`Head: ${this.head}, Size: ${this.size}`);
    }
}

let chain1 = new LinkedList();
chain1.turnArrayToList([1,2,2,1]);
let chain2 = new LinkedList();
chain2.turnArrayToList([1,2]);
 */

var maxSubarrayLength = function(nums, k) {
    let leftPointer = 0;
    let seen = {};
    let largestSubArray = 0;
    for (let rightPointer = 0; rightPointer < nums.length; rightPointer++) {
        if (!seen[nums[rightPointer]]) {
            seen[nums[rightPointer]] = 1;
        } else {
            seen[nums[rightPointer]]++
        }
        if (seen[nums[rightPointer]] <= k) {
            largestSubArray = Math.max(largestSubArray, rightPointer - leftPointer + 1);
        }
        while (seen[nums[rightPointer]] > k) {
            seen[nums[leftPointer++]]--;
        }
    }
    console.log(largestSubArray);
};

maxSubarrayLength([1,2,3,1,2,3,1,2],2);
maxSubarrayLength([1,2,1,2,1,2,1,2],1);
maxSubarrayLength([5,5,5,5,5,5,5],4);

