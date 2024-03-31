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

var countSubarrays = function(nums, minK, maxK) {
    let minPosition = -1;
    let maxPosition = -1;
    let leftBound = -1;
    let answer = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < minK || nums[i] > maxK) {
            leftBound = i;
        }
        if (nums[i] === minK) {
            minPosition = i;
        }
        if (nums[i] === maxK) {
            maxPosition = i;
        }
        answer += Math.max(0, Math.min(maxPosition, minPosition) - leftBound);
    }
    console.log(answer);
    return answer;
};

countSubarrays([1,3,5,2,7,5],1,5);
countSubarrays([1,1,1,1],1,1);
