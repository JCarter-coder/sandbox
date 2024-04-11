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

var removeKdigits = function(num, k) {
    let numArray = num.split('');
    let index = 1;
    let stack = [];
    
    while (numArray.length > 1 && k > 0) {
        //console.log(numArray[index++]);
        if (numArray[index] < numArray[index - 1]) {
            numArray.splice(index, 1);
            index = 1;
        }



        index++;
        k--;
    }
    
    /* while (numArray[0] === "0" && numArray.length > 0) {
        numArray.splice(0, 1);
    } */
    if (numArray.length === 0) {
        console.log("0");
        return "0";
    } else {
        console.log(numArray.join(''));
    }
    
};

removeKdigits("1432219", 3);
removeKdigits("10200", 1);
removeKdigits("10", 2);
removeKdigits("10", 1);
removeKdigits("10001", 1);