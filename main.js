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


var moveZeroes = function(nums) {
    let lastIndex = nums.length - 1;
    console.log(nums);
    for (let i = 0; i <= lastIndex; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            i--;
            lastIndex--;
        }
    }
    console.log(nums);
    return nums;
};

moveZeroes([0,1,0,3,12]);
moveZeroes([0]);
moveZeroes([0,0,1])
