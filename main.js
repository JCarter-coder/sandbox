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

var countSubarrays = function(nums, k) {
    let maxElement = Math.max(...nums);
    let totalCount = 0;
    let start = 0;
    let maxElementsInWindow = 0;
    for (let end = 0; end < nums.length; end++) {
        if (nums[end] === maxElement) {
            maxElementsInWindow++;
        }
        while (k === maxElementsInWindow) {
            if (nums[start] === maxElement) {
                maxElementsInWindow--;
            }
            start++;
        }
        totalCount += start;
    }
    console.log(totalCount);
    return totalCount;
};

countSubarrays([1,3,2,3,3],2);
countSubarrays([1,4,2,1],3);
