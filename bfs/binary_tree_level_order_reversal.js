//https://leetcode.com/problems/binary-tree-level-order-traversal/description/

const { TreeNode } = require("../treeNode");

/**
    PROBLEM
        Given the root of a binary tree, return the level order 
        traversal of its nodes' values. (i.e., from left to right, 
        level by level).

        
    EXAMPLES:
        Example 1:
                      3
                    /   \
                  9      20
                        /   \
                      15     7
            Input: root = [3,9,20,null,null,15,7]
            Output: [[3],[9,20],[15,7]]

        Example 2:
            Input: root = [1]
            Output: [[1]]

        Example 3:
            Input: root = []
            Output: []
  
    CONSTRAINTS
        The number of nodes in the tree is in the range [0, 2000].
        -1000 <= Node.val <= 1000

 */

const levelOrder = (root) => {
    /**
     * rows = []
     * nextRow = []
     * if there is a root, nextRow[root]
     * while true
     *      rows.push [nextRow]
     *      temp = nextRow_children
     *      nextRow = nextRow_children
     *      if nextRow.length === 0, break
     * return rows
     */
    const rows = []
    if(!root) return rows;
    
    let nextRow = []
    nextRow.push(root)
    while(true){
        rows.push(nextRow.map(element=> element.val))
        const children = []
        nextRow.forEach(element => {
            if(element){
                if(element.left) children.push(element.left)
                if(element.right) children.push(element.right)
            }
        })
        nextRow = children;
        if(nextRow.length === 0) break
    }
    return rows;
};

const root1 = new TreeNode(3, 
    new TreeNode(9), 
    new TreeNode(20, new TreeNode(15), new TreeNode(7)))
console.log(levelOrder(root1))
console.log(levelOrder(new TreeNode(1)))
console.log(levelOrder())
