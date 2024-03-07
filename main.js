var middleNode = function(head) {
    let currentNode = head;
    let listLength = 0;
    console.log(currentNode);

    while (currentNode != null) {
        listLength += 1;
        currentNode = currentNode.next;
        console.log(currentNode);
    }

    //console.log(`List Length: ${listLength}`);
    let middleIndex = listLength / 2;
    console.log(`Middle Index: ${middleIndex}`);
    currentNode = head;

    for (let j = 0; j <= middleIndex; j++) {
        if (j === 0) {
            currentNode = head;
        } else currentNode = currentNode.next;
    }
    console.log(currentNode);
};

class ListNode {
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
chain.turnArrayToList([1,2,3,4,5]);

middleNode(chain.head);