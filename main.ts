class NodeStructure {
    row: number;
    col: number;
    prev: NodeStructure | null;
    next: NodeStructure | null;

    constructor(row: number, col: number) {
        this.row = row;
        this.col = col;
        this.prev = null;
        this.next = null;
    }
}

class QueueClass {
    head: NodeStructure | null;
    tail: NodeStructure | null;
    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    length() {
        return this.length;
    }

    push(row: number, col: number) {
        const newNode: NodeStructure = new NodeStructure(row, col);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            if (this.tail) {
                this.tail.next = newNode;
                newNode.prev = this.tail;
            }
            this.tail = newNode;
        }
        
        this.size++;
    }

    pop() {
        if (this.head === null) return null;

        const popped = this.head;
        const newHead = this.head.next;

        if (newHead) {
            newHead.prev = null;
            this.head.next = null;
        } else {
            this.tail = null;
        }

        this.head = newHead;
        this.size--;
        return popped;
    }

    empty() {
        return this.size === 0;
    }
}

function shortestDistance(grid: number[][]): number {
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let rows = grid.length;
    let cols = grid[0].length;

    let total = new Array(rows).fill(0).map(() => new Array(cols).fill(0));

    let emptyLandValue = 0;
    let minDist = Number.MAX_VALUE;
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === 1) {
                minDist = Number.MAX_VALUE;

                let q = new QueueClass();
                q.push(row, col);

                let steps = 0;

                while (!q.empty()) {
                    steps++;

                    for (let level = q.size; level > 0; level--) {
                        let curr = q.pop();

                        dirs.forEach((dir) => {
                            if (curr) {
                                let nextRow = curr.row + dir[0];
                                let nextCol = curr.col + dir[1];

                                if (
                                    nextRow >= 0 && 
                                    nextRow < rows && 
                                    nextCol >= 0 && 
                                    nextCol < cols && 
                                    grid[nextRow][nextCol] === emptyLandValue
                                ) {
                                    grid[nextRow][nextCol]--;
                                    total[nextRow][nextCol] += steps;
                                    q.push(nextRow, nextCol);
                                    minDist = Math.min(minDist, total[nextRow][nextCol]);
                                }
                            }
                            
                        });
                    }
                }

                emptyLandValue--;
            }
        }
    }
    let result = minDist === Number.MAX_VALUE ? -1 : minDist;
    console.log(result);
    return result;
};

shortestDistance([[1,0,2,0,1],[0,0,0,0,0],[0,0,1,0,0]]);
shortestDistance([[1,0]]);
shortestDistance([[1]]);
