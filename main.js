var once = function(fn) {
    let calledOnce = false;
    return function(...args){
        if (calledOnce) {
            console.log('undefined');
        } else {
            calledOnce = true;
            console.log(fn(...args));
        }
    }
};

let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn);

onceFn(1,2,3); // 6
onceFn(2,3,6);

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


