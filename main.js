class ListNode {
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
chain1.turnArrayToList([1,2,3,4]);
//chain1.turnArrayToList([1,2,3,4,5]);



var reorderList = function(head) {
    let slowPointer = head;
    let fastPointer = head;
    // edge case
    if (head === null) {
        return;
    }
    // find the middle node
    while (fastPointer !== null && fastPointer.next !== null) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    }
    
    // reverse the second half of the list
    let previous = null;
    let current = slowPointer;
    let tempNode;
    while (current !== null) {
        tempNode = current.next;
        current.next = previous;
        previous = current;
        current = tempNode;
    }

    // merge both lists
    let first = head;
    let second = previous;
    while (second.next !== null) {
        tempNode = first.next;
        first.next = second;
        first = tempNode;
        tempNode = second.next;
        second.next = first;
        second = tempNode;
    }
};

reorderList(chain1.head);

/* insert([[1,3],[6,9]],[2,5]);
insert([[1,2],[3,5],[6,7],[8,10],[12,16]],[4,8]);
insert([],[5,7]);
insert([[1,5]],[2,7]);
insert([[1,5]],[6,8]);
insert([[0,5],[9,12]],[7,16]); */


/* insert([[3,5],[7,8]],[1,2]); // case 1 correct
insert([[3,5],[7,8]],[1,4]); // case 2 correct
insert([[3,5],[7,8]],[1,6]); // case 3 correct
insert([[3,6],[7,8]],[4,5]); // case 4 correct
insert([[3,5],[7,8]],[4,6]); // case 5 correct
insert([[3,5],[7,8]],[9,10]); // case 6 correct */

