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

var cancellable = function(fn, args, t) {
    const timeoutId = setTimeout(() => {
        fn.apply(null, args);
    }, t);

    const cancelFn = function() {
        clearTimeout(timeoutId);
    };
    
    return cancelFn;
};

cancellable((x) => x*5, [2], 20);



//let chain = new LinkedList();
//chain.turnArrayToList([1,1,2,1,2,3]);

//frequenciesOfElements(chain.head);
