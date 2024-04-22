class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insertLevelOrder(val) {
        if (val.length === 0) return;
        else {
            this.root = new TreeNode(val[0]);
            const queue = [this.root];
    
            let i = 1;
    
            while (queue.length > 0 && i < val.length) {
                let current = queue.shift();
    
                if (i < val.length) {
                    if (val[i] !== null) {
                        current.left = new TreeNode(val[i]);
                        queue.push(current.left);
                    } 
                    i++;
                }
    
                if (i < val.length) {
                    if (val[i] !== null) {
                        current.right = new TreeNode(val[i]);
                        queue.push(current.right);
                    } 
                    i++;
                }
            }
        }
    }
}

var openLock = function(deadends, target) {
    const nextSlot = new Map([
        ['0', '1'],
        ['1', '2'],
        ['2', '3'],
        ['3', '4'],
        ['4', '5'],
        ['5', '6'],
        ['6', '7'],
        ['7', '8'],
        ['8', '9'],
        ['9', '0']
    ]);
    const prevSlot = new Map([
        ['0', '9'],
        ['1', '0'],
        ['2', '1'],
        ['3', '2'],
        ['4', '3'],
        ['5', '4'],
        ['6', '5'],
        ['7', '6'],
        ['8', '7'],
        ['9', '8']
    ]);
    // a set to store visited and deadend combos
    let visitedCombos = new Set(deadends);
    // a queue to store generated combos after each turn
    let pendingCombos = [];
    let turns = 0;

    if (visitedCombos.has("0000")) {
        console.log(-1);
        return -1;
    }

    // start with initial combo "0000"
    pendingCombos.push("0000");
    visitedCombos.add("0000")

    while (pendingCombos.length !== 0) {
        let currLevelNodesCount = pendingCombos.length;
        for (let i = 0; i < currLevelNodesCount; i++) {
            // get current combo from front of queue
            currentCombo = pendingCombos.shift();

            // if currentCombo matches the target
            // return the number of turns
            if (currentCombo === target) {
                console.log(turns);
                return turns;
            }

            // explore all possible new combos by turning
            // each wheel in each direction
            for (let wheel = 0; wheel < 4; wheel++) {
                // generate new combo via next digit
                let newCombo = currentCombo.split('');
                newCombo[wheel] = nextSlot.get(newCombo[wheel]);
                newCombo = newCombo.join('');

                // if newCombo is not deadend and unvisited
                if (!visitedCombos.has(newCombo)) {
                    pendingCombos.push(newCombo);
                    visitedCombos.add(newCombo);
                }

                // generate new combo via prev digit
                newCombo = currentCombo.split('');
                newCombo[wheel] = prevSlot.get(newCombo[wheel]);
                newCombo = newCombo.join('');

                // if newCombo is not deadend and unvisited
                if (!visitedCombos.has(newCombo)) {
                    pendingCombos.push(newCombo);
                    visitedCombos.add(newCombo);
                }
            }
        }
        // we will visit the next-level combos
        turns++;
    }
    // we never reached the target combo
    console.log(-1);
    return -1;
};

openLock(["0201","0101","0102","1212","2002"],"0202");
openLock(["8888"],"0009");
openLock(["8887","8889","8878","8898","8788","8988","7888","9888"],"8888");
