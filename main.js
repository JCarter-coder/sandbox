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

var maximumHappinessSum = function(happiness, k) {
    let maxHappiness = 0;
    let decrement = 0;
    happiness.sort((a,b) => b - a);
    console.log(happiness);

    for (let i = 0; i < k; i++) {
        if (happiness[i] + decrement >= 0) {
            maxHappiness += happiness[i] + decrement;
        }
        decrement--;
    }
    console.log(maxHappiness);
};

maximumHappinessSum([1,2,3], 2);
maximumHappinessSum([1,1,1,1], 2);
maximumHappinessSum([2,3,4,5], 1);





//let chain = new LinkedList();
//chain.turnArrayToList([1,1,2,1,2,3]);

//frequenciesOfElements(chain.head);
