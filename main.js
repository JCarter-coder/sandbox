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

let chain1 = new LinkedList();
chain1.turnArrayToList([10,1,13,6,9,5]);
 */

var minMeetingRooms = function(intervals) {
    let startTime = [];
    let endTime = [];
    for (let i = 0; i < intervals.length; i++) {
        startTime.push(intervals[i][0]);
        endTime.push(intervals[i][1]);
    }
    startTime.sort((a,b) => a - b);
    endTime.sort((a,b) => a - b);

    let startPointer = 0;
    let endPointer = 0;
    let usedRooms = 0;

    while (startPointer < intervals.length) {
        if (startTime[startPointer] >= endTime[endPointer]) {
            usedRooms--;
            endPointer++;
        }
        usedRooms++;
        startPointer++;
    }
    
    console.log(usedRooms);
};

minMeetingRooms([[0,30],[5,10],[15,20]]);
minMeetingRooms([[7,10],[2,4]]);

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

