/* class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(val) {
        let newNode = new ListNode(val);
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

let chain = new LinkedList();
chain.turnArrayToList([1,2,-3,3,1]); */

var findMaxLength = function(nums) {
    let array = new Array(2 * nums.length + 1);
    array.fill(-2);
    array[nums.length] = -1;
    let count = 0;
    let maxLength = 0;
    for (let i = 0; i < nums.length; i++) {
        count = count + (nums[i] === 0 ? -1 : 1);
        if (array[count + nums.length] >= -1) {
            maxLength = Math.max(maxLength, i - array[count + nums.length]);
        } else {
            array[count + nums.length] = i;
        }
    }
    console.log(maxLength);
};

findMaxLength([0,1]);
findMaxLength([0,1,0]);
findMaxLength([0,1,1,0,1,1,1,0]);