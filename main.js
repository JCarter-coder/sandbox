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

var increasingTriplet = function(nums) {
    if (nums.length < 3) {
        console.log('false');
        return false;
    }
    let firstNumber = Number.MAX_VALUE;
    let secondNumber = Number.MAX_VALUE;

    for (let num of nums) {
        if (num <= firstNumber) {
            firstNumber = num;
        } else if (num <= secondNumber) {
            secondNumber = num;
        } else {
            console.log('true');
            return true;
        }
    }
    console.log('false');
    return false;
};

increasingTriplet([1,2,3,4,5]);
increasingTriplet([5,4,3,2,1]);
increasingTriplet([2,1,5,0,4,6]);
increasingTriplet([20,100,10,12,5,13]);
