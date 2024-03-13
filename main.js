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

var pivotInteger = function(n) {
    let leftSum = 0;
    let rightSum = n;
    let leftPointer = 1;
    let rightPointer = n;
    for (leftPointer = 1; leftPointer <= rightPointer; leftPointer++) {
        if (leftPointer === rightPointer) {
            // when the pointers are the same add the newly
            // incremented leftPointer value and break
            leftSum += leftPointer;
            break;
        }
        else if (leftSum + leftPointer < rightSum) {
            leftSum += leftPointer;
        } else {
            rightPointer--;
            rightSum += rightPointer;
            // reset leftPointer to reevaluate
            leftPointer--;
        }
    }
    if (leftSum === rightSum) {
        console.log(leftPointer);
        return leftPointer;
    } else {
        console.log(-1);
        return -1;
    }
    //console.log(`L sum: ${leftSum}, R sum: ${rightSum}`)
    //console.log(`L: ${leftPointer}, R: ${rightPointer}`);
};

pivotInteger(8);
pivotInteger(1);
pivotInteger(4);