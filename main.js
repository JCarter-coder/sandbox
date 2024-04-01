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

var chunk = function(arr, size) {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        let count = size;
        let subArray = [];
        while (count > 0 && !(i >= arr.length)) {
            subArray.push(arr[i++]);
            count--;
        }
        i--;
        answer.push(subArray);
    }
    console.log(answer);
    return answer;
};

chunk([1,2,3,4,5],1);
chunk([1,9,6,3,2],3);
chunk([8,5,3,2,6],6);
chunk([],1);
