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

var countStudents = function(students, sandwiches) {
    let index = 0;
    let lengthTracker = students.length;
    let result = lengthTracker;
    while (index < students.length) {        
        let firstSandwich = sandwiches[index];
        if (students[index] === firstSandwich) {
            students.splice(index, 1);
            sandwiches.splice(index, 1);
            lengthTracker = students.length;
            result = lengthTracker;
        } else if (lengthTracker-- > 0) {
            let tempStudent = students[index];
            students.splice(index, 1);
            students.push(tempStudent);
        } else {
            console.log(result);
            return result;
        }
    }
    console.log(result);
    return result;
};

countStudents([1,1,0,0],[0,1,0,1]);
countStudents([1,1,1,0,0,1],[1,0,0,0,1,1]);
