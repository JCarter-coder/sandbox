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

var subarraysWithKDistinct = function(nums, k) {
    // array to store the count of distinct values
    // encountered
    let distinctCount = new Array(nums.length + 1).fill(0);
    let totalCount = 0;
    let left = 0;
    let right = 0;
    let currentCount = 0;

    while (right < nums.length) {
        // increment the count of the current element
        // in the window
        if (++distinctCount[nums[right++]] === 1) {
            // if encountering a new distinct element
            // decrement k
            k--;
        }

        // if k becomes negative, adjust the window 
        // from the left
        if (k < 0) {
            // move the left pointer until the count
            // of distinct elements becomes valid again
            --distinctCount[nums[left++]];
            k++;
            currentCount = 0;
        }
        // if k becomes 0, calculate subarrays
        if (k === 0) {
            // while the count of left remains greater
            // than 1, keep shrinking the window from
            // the left
            while (distinctCount[nums[left]] > 1) {
                --distinctCount[nums[left++]];
                currentCount++;
            }
            // add the count of subarrays with k
            // distinct elements to the total count
            totalCount += currentCount + 1;
        }
    }
    console.log(totalCount);
};

subarraysWithKDistinct([1,2,1,2,3],2);
subarraysWithKDistinct([1,2,1,3,4],3);
