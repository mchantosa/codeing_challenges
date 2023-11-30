const { Node, Tree } = require("./binary_tree_class.js");

/** Problem
 * Given a binary tree node, return the number of nodes in the 
 * longest set of repeating values between the root and a leaf 
 * node
 * 
 * Input: Node in a Binary Tree
 * Output: Integer
 * 
 * Examples
 *      Input:
 *             2
 *          /     \
 *        1         3
 *                    \
 *                      4
 *      Output: 1
 * 
 *
 *      Input:
 *                             2
 *                          /     \
 *                        1         3
 *                          \         \
 *                          1          4
 *                        /     \
 *                      1        1
 *                     /           \
 *                   1               1
 *                                    \
 *                                     1
 *      Output: 5
 * 
 */

/** Whiteboarding
 * 
 * Understading
 *      What if I get a null input: return 0
 *      What if I only have a single node: return 1
 * 
 * Diagraming
 * 
 *      Input:
 *             2(0)
 *          /     \
 *        1(0)      3(0)
 *                    \
 *                      4(0)
 *      Output: 1
 * 
 *
 *      Input:
 *                             2(0)
 *                          /     \
 *                        1(0)      3(0)
 *                          \           \
 *                          1(1)         4(0)
 *                        /     \
 *                      1(2)     1(2)
 *                      /          \
 *                  1(3)            1(3)
 *                                    \
 *                                     1(4)
 *      Output: 5
 * 
 * Pseudocode
 *      longestRepeatingLength(node){
 *          if !node return 0
 *          longestLength = 1
 *          helper(node, tailLength){
 *              if(tailLength + 1 > longestLength) longestLength = tailLength + 1
 *              if node.left
 *                  if node.value === node.left.value, helper(node.left, tailLength + 1)
 *                  else helper(node.left, 0)
 *              if node.right
 *                  if node.value === node.right.value, helper(node.right, tailLength + 1)
 *                  else helper(node.right, 0)
 *          }
 *          return longestLength
 *      }
 */

function longestRepeatingLength(node){
    if(!node) return 0;
    let longestLength = 1;
    const helper = (node, tailLength) => {
        tailLength++;
        if(tailLength > longestLength) longestLength = tailLength;
        if(node.left){
            if(node.value === node.left.value) {
                helper(node.left, tailLength)
            } else helper(node.left, 0)    
        }
        if(node.right){
            if(node.right&&(node.value === node.right.value)){
                helper(node.right, tailLength)
            } else helper(node.right, 0)
        }
    }
    helper(node);
    return longestLength;
}

const tree1 = new Tree();
tree1.insert(2)
tree1.insert(1)
tree1.insert(3)
tree1.insert(4)


const tree2 = new Tree();
tree2.insert(2)
tree2.insert(1)
tree2.insert(3)
tree2.insert(1)
tree2.insert(1)
tree2.insert(1)
tree2.insert(1)
tree2.insert(4)
tree2.root.left.right.left = new Node(1)
tree2.root.left.right.left.left = new Node(1)

const bfsArr = [];
tree2.traverseBFS((node) => {
  bfsArr.push(node.value);
});
console.log(`bfsArr: ${bfsArr}`);

console.log(longestRepeatingLength(null)===0)
console.log(longestRepeatingLength(tree1.root)===1)
console.log(longestRepeatingLength(tree2.root)===5)