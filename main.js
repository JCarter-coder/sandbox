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

var leastInterval = function(tasks, n) {
    let taskFreq = {};
    let maxFreq = 0;
    for (let task of tasks) {
        if (!taskFreq[task]) {
            taskFreq[task] = 1;
        } else {
            taskFreq[task]++;
        }
        if (taskFreq[task] > maxFreq) {
            maxFreq = taskFreq[task];
        }
    }
    // number of tasks with maxFreq
    let maxCount = (Object.values(taskFreq)).filter((val) => val === maxFreq).length;
    console.log(taskFreq);
    console.log(maxFreq);
    console.log(maxCount);
    
    let partCount = maxFreq - 1;
    let partLength = n - (maxCount - 1);
    let emptySlots = partCount * partLength;
    let availableTasks = tasks.length - maxFreq * maxCount;
    let idles = Math.max(0, emptySlots - availableTasks);

    console.log(tasks.length + idles);
};

leastInterval(["A","A","A","B","B","B"],2);
leastInterval(["A","C","A","B","D","B"],1);
leastInterval(["A","A","A", "B","B","B"],3);

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

