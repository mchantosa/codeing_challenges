//https://leetcode.com/problems/same-tree/description/

const TreeNode = require('../treeNode').TreeNode;
const Queue = require('../queue').Queue;

/**
 * 
    PROBLEM
        Given the roots of two binary trees p and q, write a function to 
        check if they are the same or not.

        Two binary trees are considered the same if they are structurally 
        identical, and the nodes have the same value.

    EXAMPLES
        Inputs are not arrays (they are tree nodes)

        Example 1:
                P:        1         Q:      1  
                        /   \             /   \       
                      2       3         2       3
            Input: p = [1,2,3], q = [1,2,3]
            Output: true

        Example 2:
                P:        1         Q:      1  
                        /                     \       
                      2                         2
            Input: p = [1,2], q = [1,null,2]
            Output: false

        Example 3:
                P:        1         Q:      1  
                        /   \             /   \       
                      2       2         1       2
            Input: p = [1,2,1], q = [1,1,2]
            Output: false
    

    CONSTRAINTS
        - The number of nodes in both trees is in the range [0, 100].
        - -10^4 <= Node.val <= 10^4
 */

const sameTree = (p, q) => {
    /** 
     * Traverse both trees in a BFS manner
     * Compare the values of the nodes
    */
    
    const mapTree = (root) => {
        const queue = new Queue();
        queue.enqueue(root)
        let visited = '';
        while(!queue.isEmpty()){
            let head = queue.dequeue()
            if(head !== null){
                visited += head.val;
                queue.enqueue(head.left)
                queue.enqueue(head.right)
            } else {
                visited += 'x'
            }
        }
        return visited;
    }

    const visitedP = mapTree(p);
    const visitedQ = mapTree(q)
    return visitedP === visitedQ;
}

const p1  = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const q1  = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(sameTree(p1, q1)===true);

const p2 = new TreeNode(1, new TreeNode(2));
const q2 = new TreeNode(1, null, new TreeNode(2))
console.log(sameTree(p2, q2)===false);

const p3 = new TreeNode(1, new TreeNode(2), new TreeNode(1));
const q3 = new TreeNode(1, new TreeNode(1), new TreeNode(2));
console.log(sameTree(p3, q3)===false);