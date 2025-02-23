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

function constructFromPrePost(preorder: number[], postorder: number[]): TreeNode | null {
    let preIndex = 0;
    let postIndex = 0;

    const constructTree = (
        preorder: number[],
        postorder: number[]
    ): TreeNode => {
        let root: TreeNode = new TreeNode(preorder[preIndex++]);

        if (root.val !== postorder[postIndex]) {
            root.left = constructTree(preorder, postorder);
        }

        if (root.val !== postorder[postIndex]) {
            root.right = constructTree(preorder, postorder);
        }

        postIndex++;
        return root;
    }
    
    return constructTree(preorder, postorder);
};

constructFromPrePost([1,2,4,5,3,6,7],[4,5,2,6,7,3,1]);
constructFromPrePost([1],[1]);
