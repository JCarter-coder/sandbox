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
    let sum = (n * (n + 1) / 2);
    let pivot = Math.floor(Math.sqrt(sum));
    console.log(pivot * pivot === sum ? pivot : -1);
};

pivotInteger(8);
pivotInteger(1);
pivotInteger(4);
pivotInteger(15);