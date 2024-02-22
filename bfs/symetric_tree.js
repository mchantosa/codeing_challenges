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
        
        Example 3: 
                                4
                        /                \
                    -57                 -57
                     / \                 / \
                null    67           67     null
                        /\            /\
                     null  -97     -97  null
                            /\      /\
                        null null  null null  
        Input: root = [4,-57,-57,null,67,67,null,null,-97,-97]
        Output: true

    CONSTRAINTS
        - The number of nodes in the tree is in the range [1, 1000].
        - -100 <= Node.val <= 100
*/

const isSymmetric = (root) => {
    /**
     * for each row
     *      check for palindrome
     *      if not return false
     * return true
     * 
     * get a row
     *      row 1 = [root]
     *          nextRow = [] 
     *          add children
     *          parse values
     *          if !palindrome return false 
     *      row 2 = nextRow
     *          nextRow = []
     *          add children
     *          parse values
     *          if !palindrome return false
     *      ...
     *      return true
     */

    let row = [root]
    while(true){
        const nextRow = []
        const visited = []
        //populate visited and nextRow
        row.forEach(element => {
            if(element !== null){
                visited.push((element.val === null) ? 'x' : element.val)
                nextRow.push(element.left)
                nextRow.push(element.right)
            } else visited.push('x')
        })
        //if !palindrome, return false
        if(visited.join('') !== visited.reverse().join('')) return false
        //if there is no next row, end loop
        if(nextRow.length === 0) break
        row = nextRow;
    }

    return true
}

const root1 = new TreeNode(1, 
    new TreeNode(2, new TreeNode(3), new TreeNode(4)), 
    new TreeNode(2, new TreeNode(4), new TreeNode(3)))

const root2 = new TreeNode(1, 
    new TreeNode(2, new TreeNode(null), new TreeNode(3)), 
    new TreeNode(2, new TreeNode(null), new TreeNode(3)))

const root3 = new TreeNode(4, 
    new TreeNode(-57, new TreeNode(null), new TreeNode(67, new TreeNode(97), new TreeNode(null))), 
    new TreeNode(-57, new TreeNode(67, new TreeNode(null), new TreeNode(97)), new TreeNode(null)))

console.log(isSymmetric(root1) === true)
console.log(isSymmetric(root2) === false)
console.log(isSymmetric(root3) === true)