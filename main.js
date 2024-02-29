var isEvenOddTree = function(root) {
    let prev = [];
    
    function dfs(current, level) {
        if (current === null) {
            return true;
        }
        if (current.val % 2 === level % 2) {
            return false;
        }
        while (prev.length <= level) {
            prev.push(0);
        }
        if (prev[level] != 0 &&
            ((level % 2 === 0 && current.val <= prev[level]) ||
            (level % 2 === 1 && current.val >= prev[level]))) {
            return false;
        }
        prev[level] = current.val;

        return dfs(current.left, level + 1) && dfs(current.right, level + 1);
    }

    let current = root;
    return dfs(current, 0);
};

class TreeNode {
    constructor(val, left, right) {
        this.val = (val===undefined ? 0 : val);
        this.left = (left===undefined ? null : left);
        this.right = (right===undefined ? null : right);
    }
    
}
isEvenOddTree([1,10,4,3,null,7,9,12,8,6,null,null,2]);
isEvenOddTree([5,4,2,3,3,7]);
isEvenOddTree([5,9,1,3,5,7]);

//findAllPeople(6, [[1,2,5],[2,3,8],[1,5,10]], 1);
//findAllPeople(4, [[3,1,3],[1,2,2],[0,3,3]], 3);
//findAllPeople(5, [[3,4,2],[1,2,1],[2,3,1]], 1);

