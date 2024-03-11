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

var customSortString = function(order, s) {
    const permutedSet = new Set();
    const splitS = s.split('');
    //console.log(splitS);
    const setIterator = permutedSet.keys();
    let result = "";
    for (let i = 0; i < order.length; i++) {
        permutedSet.add(order[i]);
    }
    let index = 0;
    while (s.length > index) {
        // next char to evaluate in order Set
        let currentOrderChar = setIterator.next().value;
        // index of s string, if it is found in order Set
        let indexEvaluated = splitS.indexOf(currentOrderChar);
        //console.log(currentOrderChar);
        while (indexEvaluated >= 0 && currentOrderChar !== undefined) {
            //console.log(currentOrderChar);
            //console.log(indexEvaluated);
            splitS.splice(indexEvaluated, 1);
            result += currentOrderChar;
            indexEvaluated = splitS.indexOf(currentOrderChar);
        } 
        index++;
    }
    index = 0;
    if (splitS.length >= 0) {
        while (splitS[index]) {
            result += splitS[index];
            index++;
        }
    }
    console.log(result);
};

customSortString("cba","abcd");
customSortString("bcafg","abcd");
customSortString("kqep","pekeq");



//let chain = new LinkedList();
//chain.turnArrayToList([1,1,2,1,2,3]);

//frequenciesOfElements(chain.head);
