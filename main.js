class ListNode {
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

let chain1 = new LinkedList();
let chain2 = new LinkedList();
chain1.turnArrayToList([10,1,13,6,9,5]);
chain2.turnArrayToList([1000000,1000001,1000002]);
//chain1.turnArrayToList([0,1,2,3,4,5,6]);
//chain2.turnArrayToList([1000000,1000001,1000002,1000003,1000004]);

// couldn't get the solution to pass LeetCode though it works in 
// IDE. I think I have a misunderstanding of a fundamental setup
// for the LinkedList definition that they are using in LeetCode.
// They show a ListNode definition but there is no discussion on
// how they are implementing the linked list. I have had this happen
// on several occassions where my code passes and other times it 
// doesn't. I even save the linkedList/ListNode to be consistent...
var mergeInBetween = function(list1, a, b, list2) {
    let insertionStart = 0;
    let insertionEnd = 0;
    let inserted = false;
    let currentList1Node = list1.head;
    let currentList2Node = list2.head;
    let result = new LinkedList();
    while (currentList1Node !== null) {
        //console.log(currentList1Node.val);
        if (insertionStart < a) {
            result.add(currentList1Node.val);
            currentList1Node = currentList1Node.next;
            insertionStart++;
        } else if (insertionStart === a && inserted === false) {
            while (currentList2Node !== null) {
                result.add(currentList2Node.val);
                currentList2Node = currentList2Node.next;
            }
            inserted = true;
        } else if (a + insertionEnd < b + 1) {
            currentList1Node = currentList1Node.next;
            insertionEnd++;
        } else if (a + insertionEnd === b + 1) {
            while (currentList1Node !== null) {
                result.add(currentList1Node.val);
                currentList1Node = currentList1Node.next;
            }
            break;
        }
    }
    console.log(result.head);
    /* let currentResultNode = result.head;
    while (currentResultNode !== null) {
        console.log(currentResultNode.val);
        currentResultNode = currentResultNode.next;
    } */

};

mergeInBetween(chain1, 3, 4, chain2);
//mergeInBetween(chain1, 2, 5, chain2);


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

