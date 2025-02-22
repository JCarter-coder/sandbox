class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function recoverFromPreorder(traversal: string): TreeNode | null {
    const depths = [new TreeNode()];

    const attach = (
        str: string,
        depths: TreeNode[],
        depthI: number,
        valueMinI: number,
        valueMaxI: number
    ): void => {
        const depth = valueMinI - depthI;
        const value = parseInt(str.substring(valueMinI, valueMaxI));
        depths[depth + 1] = new TreeNode(value);
        if (depths[depth].left === null) {
            depths[depth].left = depths[depth + 1];
        } else {
            depths[depth].right = depths[depth + 1];
        }
    }

    let depthI = 0;
    let valueI = -1;
    for (let i = 0; i < traversal.length; ++i) {
        if (traversal[i] === '-') {
            if (valueI >= depthI) {
                attach(traversal, depths, depthI, valueI, i);
                depthI = i;
            }
        } else if (valueI < depthI) {
            valueI = i;
        }
    }

    attach(traversal, depths, depthI, valueI, traversal.length);
    return depths[1];
};

recoverFromPreorder("1-2--3--4-5--6--7");
recoverFromPreorder("1-2--3---4-5--6---7");
recoverFromPreorder("1-401--349---90--88");
