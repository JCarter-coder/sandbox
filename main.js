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
    let circleStudentCount = 0;
    let squareStudentCount = 0;

    for (let i = 0; i < students.length; i++) {
        if (students[i] === 0) {
            circleStudentCount++;
        } else squareStudentCount++;
    }

    for (let j = 0; j < sandwiches.length; j++) {
        if (sandwiches[j] === 0 && circleStudentCount === 0) {
            console.log(squareStudentCount);
            return squareStudentCount;
        }
        if (sandwiches[j] === 1 && squareStudentCount === 0) {
            console.log(circleStudentCount);
            return circleStudentCount;
        }

        if (sandwiches[j] === 0) {
            circleStudentCount--;
        } else squareStudentCount--;
    }

    console.log(0);
    return 0;
};

countStudents([1,1,0,0],[0,1,0,1]);
countStudents([1,1,1,0,0,1],[1,0,0,0,1,1]);
