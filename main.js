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

var minRemoveToMakeValid = function(s) {
    let openedParenthesis = 0;
    let closedParenthesis = 0;
    let strArray = s.split('');
    let start = 0;
    let end = strArray.length - 1;
    while (start <= end) {
        if (strArray[start] === "(") {
            openedParenthesis++;
        } else if (strArray[start] === ")" && openedParenthesis <= 0) {
            strArray.splice(start--, 1);
        } else if (strArray[start] === ")") {
            openedParenthesis--;
        }
        start++;
    }
    if (openedParenthesis > closedParenthesis) {
        start = 0;
        while (end >= start) {
            if (strArray[end] === ")") {
                closedParenthesis++;
            } else if (strArray[end] === "(" && closedParenthesis <= 0) {
                strArray.splice(end, 1);
            } else if (strArray[end] === "(") {
                closedParenthesis--;
            }
            end--;
        }
    }
    
    //console.log(`Opened: ${openedParenthesis}`);
    //console.log(`Closed: ${closedParenthesis}`);
    console.log(strArray.join(''));
};

minRemoveToMakeValid("lee(t(c)o)de)");
minRemoveToMakeValid("a)b(c)d");
minRemoveToMakeValid("))((");
