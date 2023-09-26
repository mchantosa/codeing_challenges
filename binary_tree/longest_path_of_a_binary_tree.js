const { Node, Tree } = require("./binary_tree_class.js");

/** Problem 
 * http://res.cloudinary.com/outco-io/image/upload/v1521248026/LongestPathBinaryTree.png
 * 
 * Given a binary tree node, return the number of nodes in the 
 * longest path between the root and a leaf node
 * 
 * Input and Output
 *      Input: Node in a Binary Tree
 *      Output: Integer
 * 
 * Example
 *      Input:
 *             2
 *          /     \
 *        1         3
 *                    \
 *                      4
 *      Output: 3
 * 
 * Constraints
 *      Time Complexity: O(N)
 *      Auxiliary Space Complexity: O(N)
 * 
 * Binary Tree Node has the following properties:
 *      1. value (Integer)
 *      2. left (Binary Tree Node, default null)
 *      3. right (Binary Tree Node, default null)
 */

/** Whiteboard 
 * 
 * Understand
 *      Can I have a null node? Yes
 *      Can I have cycle in the tree? No
 *      Can I have a fragmented tree? No
 * 
 * BFS travel through the tree for each level add 1 to depth
 *      BFS has a time complexity of O(N) and space complexity of O(N)
 * 
 * Psuedocode
 *      longestPath(root)
 *          if root is null return 0
 *          let queue = [root]
 *          let depth = 0;
 *          while queue.length > 0
 *              depth++
 *              newQueue = []
 *              for each q member, if left push left, if right push right
 *              queue = new queue
 *          return depth
*/

function longestPath(root){
    if(!root) return 0;
    let queue = [root];
    let depth = 0;
    while (queue.length > 0){
        depth++;
        newQueue = [];
        queue.forEach(node=> {
            if(node.left)newQueue.push(node.left)
            if(node.right)newQueue.push(node.right)
        })
        queue = newQueue;
    }
    return depth;
}


const tree = new Tree();
console.log(longestPath(tree.root)===0)
tree.insert(2);
console.log(longestPath(tree.root)===1)
tree.insert(1);
console.log(longestPath(tree.root)===2)
tree.insert(3);
console.log(longestPath(tree.root)===2)
tree.insert(4);
console.log(longestPath(tree.root)===3)