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
} */

var minimumBoxes = function(apple, capacity) {
    capacity.sort((a,b) => b - a);
    let sum = 0;
    for (let i = 0; i < apple.length; i++) {
        sum += apple[i];
    }
    let numBoxes = 0;
    for (let j = 0; j < capacity.length; j++) {
        if (sum > 0) {
            sum -= capacity[j];
            numBoxes++;
        } else {
            break;
        }
    }
    console.log(`Total: ${numBoxes}`);
};

minimumBoxes([1,3,2],[4,3,1,5,2]);
minimumBoxes([5,5,5],[2,4,2,7]);




//let chain = new LinkedList();
//chain.turnArrayToList([1,1,2,1,2,3]);

//frequenciesOfElements(chain.head);
