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

var frequenciesOfElements = function(head) {
    let container = {};
    while (head !== null) {
        if (!container[head.val]) {
            container[head.val] = 1;
        } else container[head.val]++;
        head = head.next;
    }
    let distinctElements = new LinkedList();
    let freqList = Object.values(container);
    distinctElements.turnArrayToList(freqList);
    //return the head of the linked list
    console.log(distinctElements.head);
};

let chain = new LinkedList();
chain.turnArrayToList([1,1,2,1,2,3]);
//chain.turnArrayToList([1,1,2,2,2]);
//chain.turnArrayToList([6,5,4,3,2,1]);

frequenciesOfElements(chain.head);
