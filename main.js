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

var productExceptSelf = function(nums) {
    let lastIndex = nums.length - 1;
    let answer = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            answer[i] = 1;
        } else {
            answer[i] = answer[i - 1] * nums[i - 1] 
        }
    }
    let rightProduct = 1;
    for (let j = lastIndex; j >= 0; j--) {
        
        answer[j] = answer[j] * rightProduct;
        rightProduct *= nums[j];
    }
    console.log(answer);
};

productExceptSelf([1,2,3,4]);
productExceptSelf([-1,1,0,-3,3]);