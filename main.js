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
    let leftArray = new Array(nums.length);
    let rightArray = new Array(nums.length);
    let lastIndex = nums.length - 1;
    let answer = [];
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            leftArray[i] = 1;
            rightArray[lastIndex] = 1;
        } else {
            leftArray[i] = leftArray[i - 1] * nums[i - 1] 
            rightArray[lastIndex - i] = rightArray[lastIndex - i + 1] * nums[lastIndex - i + 1];
        }
    }
    for (let j = 0; j < nums.length; j++) {
        answer.push(leftArray[j] * rightArray[j]);
    }
    console.log(answer);
};

productExceptSelf([1,2,3,4]);
productExceptSelf([-1,1,0,-3,3]);