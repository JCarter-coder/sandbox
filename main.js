var maximumOddBinaryNumber = function(s) {
    let container = {'0': 0, '1': 0};
    let maxOddBinaryString = '';
    for (let i = 0; i < s.length; i++) {
        container[s[i]]++;
    }
    // start with the ones but leaving 1 one for the last entry
    for (let j = 0; j < (container['1'] - 1); j++) {
        maxOddBinaryString += '1';
    }
    for (let k = 0; k < container['0']; k++) {
        maxOddBinaryString += '0';
    }
    // add the last one
    maxOddBinaryString += '1';
    // use up the zeros
    console.log(container);
    console.log(maxOddBinaryString);
};

maximumOddBinaryNumber("010");
maximumOddBinaryNumber("0101");

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
            current.next = newNode
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
chain.turnArrayToList([1,2,3,4,5]); */


