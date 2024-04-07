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

var checkValidString = function(s) {
    let openCount = 0;
    let closeCount = 0;
    let length = s.length - 1;

    for (let i = 0; i <= length; i++) {
        if (s.charAt(i) === '(' || s.charAt(i) === '*') {
            openCount++;
        } else {
            openCount--;
        }

        if (s.charAt(length - i) === ')' || s.charAt(length - i) === '*') {
            closeCount++;
        } else {
            closeCount--;
        }

        if (openCount < 0 || closeCount < 0) {
            console.log('false');
            return false;
        }
    }

    console.log('true');
    return true;
};

checkValidString("()");
checkValidString("(*)");
checkValidString("(*))");
checkValidString("(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())");
checkValidString('(');