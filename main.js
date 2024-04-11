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
    let stack = [];

    for (aNumber of num) {
        while (stack.length > 0 && k > 0 && stack[stack.length - 1] > aNumber) {
            stack.pop();
            k--;
        }
        stack.push(aNumber);
    }

    for (let i = 0; i < k; i++) {
        stack.pop();
    }
    
    let newString = "";
    let leadingZero = true;

    for (digit of stack) {
        if (leadingZero && digit === '0') continue;
        leadingZero = false;
        newString += digit;
    }

    if (newString.length === 0) {
        console.log("0");
        return "0";
    } else {
        console.log(newString);
        return newString;
    }
};

removeKdigits("1432219", 3);
removeKdigits("10200", 1);
removeKdigits("10", 2);
removeKdigits("10", 1);
removeKdigits("10001", 1);
removeKdigits("9", 1);
removeKdigits("25", 1);
removeKdigits("1111111", 3);