//https://leetcode.com/problems/symmetric-tree/description/

const TreeNode = require('../treeNode').TreeNode;
const Queue = require('../queue').Queue

/** 
    PROBLEM
        Given the root of a binary tree, check whether it is a mirror 
        of itself (i.e., symmetric around its center).
        
    EXAMPLES
        Example 1:
                          1
                        /   \
                      2       2
                     / \      / \
                    3   4    4   3
            Input: root = [1,2,2,3,4,4,3]
            Output: true
        Example 2:
                          1
                        /   \
                      2       2
                     / \      / \
                null    3   null  3
            Input: root = [1,2,2,null,3,null,3]
            Output: false
        

    CONSTRAINTS
        - The number of nodes in the tree is in the range [1, 1000].
        - -100 <= Node.val <= 100
*/

const isSymmetric = (root) => {
    /**
     * Is row a mirror of itself? Need to identify rows
     *  const queue
     *  const visited
     *  add root to queue
     *  while queue isn't empty
     *      dequeue = head
     *      process head
     *      enqueue children
     *          define rowStart
     *          define rowEnd
     */
    return 'boom!'
}

const root1 = new TreeNode(1, 
    new TreeNode(2, new TreeNode(3), new TreeNode(4)), 
    new TreeNode(2, new TreeNode(4), new TreeNode(3)))

const root2 = new TreeNode(1, 
    new TreeNode(2, new TreeNode(null), new TreeNode(3)), 
    new TreeNode(2, new TreeNode(null), new TreeNode(3)))

console.log(isSymmetric(root1) === true)
console.log(isSymmetric(root2) === false)