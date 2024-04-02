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

var isIsomorphic = function(s, t) {
    const container = {};
    const alreadyMapped = {};
    for (let i = 0; i < s.length; i++) {
        if (!container[s[i]] && !alreadyMapped[t[i]]) {
            container[s[i]] = t[i];
            alreadyMapped[t[i]] = true;
        } else if (container[s[i]] !== t[i]) {
            console.log('false');
            return false;
        }
    }
    console.log('true');
};

isIsomorphic("egg","add");
isIsomorphic("foo","bar");
isIsomorphic("paper","title");
isIsomorphic("badc","baba");