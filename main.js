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

var findMinArrowShots = function(points) {
    // find intersects of points, create an array of these intersects
    // and return the length of this array for number of arrows needed
    points.sort((a,b) => a[0] - b[0]);
    let array = [];
    let intersectLeft = points[0][0];
    let intersectRight = points[0][1];
    for (let i = 1; i < points.length; i++) {
        // if intersects are undefined define them and continue
        // this allows to push an interval when this loop is completed
        // and the interval has assigned variables
        if (intersectLeft === undefined && intersectRight === undefined) {
            intersectLeft = points[i][0];
            intersectRight = points[i][1];
            continue;
        }
        // if intersectRight < points[i][0]
        // then push [intersectLeft, intersectRight]
        // assign points[i] to intersect values
        if (intersectRight < points[i][0]) {
            array.push([intersectLeft, intersectRight]);
            intersectLeft = undefined;
            intersectRight = undefined;
            i--;
        }
        // if interectRight === points[i][0]
        // then intersectLeft = intersectRight
        else if (intersectRight === points[i][0]) {
            intersectLeft = intersectRight;
        }
        // if interval overlaps and extends beyond intersection,
        // then narrow the left, intersectLeft = points[i][0]
        else if (intersectRight > points[i][0] && intersectRight <= points[i][1]) {
            intersectLeft = points[i][0];
        }
        // if the interval is completely within the defined
        // intersection, narrow the intersection
        else if (intersectRight > points[i][0] && intersectRight > points[i][1]) {
            intersectLeft = points[i][0];
            intersectRight = points[i][1];
        }
    }
    if (intersectLeft !== undefined && intersectRight !== undefined) {
        array.push([intersectLeft, intersectRight]);
    }
    
    console.log(array.length);
};

findMinArrowShots([[10,16],[2,8],[1,6],[7,12]]);
findMinArrowShots([[1,2],[3,4],[5,6],[7,8]]);
findMinArrowShots([[1,2],[2,3],[3,4],[4,5]]);
findMinArrowShots([[3,9],[7,12],[3,8],[6,8],[9,10],[2,9],[0,9],[3,9],[0,6],[2,8]]);

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

