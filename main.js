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
}

let chain = new LinkedList();
chain.turnArrayToList([1,2,-3,3,1]); */

var reverseWords = function(s) {
    let str = s.trim();
    let strArray = str.split(' ');
    let result = "";
    console.log(str);
    console.log(strArray);
    for (let i = strArray.length - 1; i >= 0; i--) {
        if (i === 0) {
            result += strArray[0];
        } else if (strArray[i] !== '') {
            result += strArray[i] + ' ';
        }
    }
    console.log(result);
};

reverseWords("the sky is blue");
reverseWords("  hello world  ");
reverseWords("a good   example");