/** 
 * Given a binary tree root node, check if the tree is a valid binary search tree
 *
 * Input: node in a binary tree
 * Output: boolean
 * 
 * Examples:
 *  - input1: binary tree
 *              5
            /       \
          2         7
                  /      \
                  4      9
 *  - output1: false, 4 is right of 5
 *  
 *  - input2: binary tree
 *                4
            2           5
        1      3            7         
                        6       8
 *  - output2: true
 * 
 *
 * Whiteboarding
 * -------------------------------------------------
 * Understand
 *  - what happens if the tree is empty? true
 *  - max number of nodes? assume fits
 *  - Negative numbers? sure
 *  - Duplicate numbers? yes
 *  - What does an empty tree: should return true
 *  - Does it need to be complete? No
 *  - What makes a valid binary tree?
 *    1. each node should have <= 2 nodes
 *    2. for each node, left subtree <= parent <= right subtree
 *    3. Does a binary tree need a root?
 *    4. No cycle: No sibling connections
 *    5. Completely connected: No stray trees in the input, root node must connect to every other node
 *
 * Diagram: track boundary values for each
 *                (-inf, +inf)
 *                      5
 *                    /     \
 *            (-inf, 5)    (5, inf)
 *                2           7
 *                          /    \
 *                     (5, 7)   (7, +inf)
 *                        4         9               4 < 5, therefor return false
 *
 *  Time complexity: O(N)
 *  Aux Space complexity: O(log(N))
 *
 * Pseudocode
 *  isBinaryTree(root) -> Bool
 *    traverse(node, lo, hi)
 *      base cases
 *        if no node return true
 *        if node.val > high or node.val < low return false
 *      recursive cases
 *        L = traverse(node.left, lo, node.val)
 *        R = traverse(node.right, node.val, hi)
 *        return L + R
 *    return traverse( root, int, -int)
 *  
 *  - Time complexity: O(n)
 *  - Space complexity: O(log(n))
 *
 * Code
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
}

function isBinaryTree(root) {
  const traverse = (node, lo, hi) => {
    //base cases
    if (node === null) return true;
    if (node.value > hi || node.value < lo) return false;

    //recursive cases
    const L = traverse(node.left, lo, node.value);
    const R = traverse(node.right, node.value, hi);
    return L && R;
  };
  return traverse(root, -Infinity, Infinity);
}

const goodTree = new Tree();
goodTree.insert(4);
goodTree.insert(2);
goodTree.insert(1);
goodTree.insert(5);
goodTree.insert(7);
goodTree.insert(6);
goodTree.insert(8);
console.log(goodTree);

const badTree = new Tree();
badTree.insert(5);
badTree.insert(2);
badTree.insert(7);
badTree.insert(9);
badTree.root.right.left = new Node(4);
console.log(badTree);

console.log(isBinaryTree(goodTree.root));
console.log(isBinaryTree(badTree.root));
