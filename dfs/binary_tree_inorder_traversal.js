const { TreeNode } = require("../treeNode");

//https://leetcode.com/problems/binary-tree-inorder-traversal/description/

/**
    PROBLEM
        Given the root of a binary tree, return the inorder 
        (left child, root, right child) traversal of its nodes' 
        values.

    EXAMPLES
        Example 1:
                                    1
                                  /   \
                                null    2
                                       /
                                      3

            Input: root = [1,null,2,3]
            Output: [1,3,2]
        
        Example 2:
            Input: root = []
            Output: []
        
        Example 3:
            Input: root = [1]
            Output: [1]
        
        Example 4:
                                  1
                                /   \
                            null      0
                                    /
                                   3

        Input: root = [1,null,0,3]
        Output: [1,3,0]

    CONSTRAINTS
        - The number of nodes in the tree is in the range [0, 100].
        - -100 <= Node.val <= 100
 */

const inorderTraversal = (root) => {
    
    /**
     *  inorderValues = []
     *  helper(node)
     *      helper(left)
     *      base case (node)
     *      helper(right)
     *  helper(root)
     *  return inorderValues
     */
    const inorderValues = []
    helper = (node)=>{
        if(node && node.left)helper(node.left)
        if(node || node === 0) inorderValues.push((node.val || node.val === 0)  ? node.val : node)
        if(node && node.right)helper(node.right)
    }
    helper(root)
    return inorderValues;
};

const root1 = new TreeNode(1, null, new TreeNode(2, 3, null));
const root3 = new TreeNode(1)
const root4 = new TreeNode(1, null, new TreeNode(0, 3, null));
console.log(root1)
console.log(inorderTraversal(root1));   //[1, 3, 2]
console.log(inorderTraversal());        //[]
console.log(inorderTraversal(root3));   //[1]
console.log(inorderTraversal(root4));   //[1, 3, 0]