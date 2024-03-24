class ListNode {
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
chain1.turnArrayToList([0,1,2,3,4,5,6]);
let chain2 = new LinkedList();
chain2.turnArrayToList([1000000,1000001,1000002,1000003,1000004]);



var mergeInBetween = function(list1, a, b, list2) {
    let start = null;
    let end = list1;

    // determine insertion points
    for (let i = 0; i < b; i++) {
        // finds start
        if (i === a - 1) {
            start = end;
        }
        // finds end
        end = end.next;
    }

    // connect start node to list2
    start.next = list2;

    // find tail of list2
    while (list2.next !== null) {
        list2 = list2.next;
    }
    list2.next = end.next;
    end.next = null;

    return list1;
};

mergeInBetween(chain1.head, 2, 5, chain2.head);

/* insert([[1,3],[6,9]],[2,5]);
insert([[1,2],[3,5],[6,7],[8,10],[12,16]],[4,8]);
insert([],[5,7]);
insert([[1,5]],[2,7]);
insert([[1,5]],[6,8]);
insert([[0,5],[9,12]],[7,16]); */


/* insert([[3,5],[7,8]],[1,2]); // case 1 correct
insert([[3,5],[7,8]],[1,4]); // case 2 correct
insert([[3,5],[7,8]],[1,6]); // case 3 correct
insert([[3,6],[7,8]],[4,5]); // case 4 correct
insert([[3,5],[7,8]],[4,6]); // case 5 correct
insert([[3,5],[7,8]],[9,10]); // case 6 correct */

