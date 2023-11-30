/** Problem
 * Invert a Binary Tree
 * 
 * Given a binary tree root node, invert the binary tree mirror and return back the root node
 *
 * input: node in a binary tree
 * output: node in a binary tree
 *
 * example:
 * Input: 
 *             1
            /     \
          2         3
                  /   \
                4       5 
 * Output:
 *             1
             /    \
           3        2
          / \
        5     4     
 *
 */

/** Whiteboarding
 * -----------------------------
 * Understand
 *  - how many nodes? 0? max?
 *  - integers: yes
 *
 * Diagram
 *  - breadth first traversal
 *  - use a queue: when using an array, call out the shift difference
 *
 *      1[2, 3]
 *        [left, right] = [right, left]
 *      2[3]
 *        [null,null] = [null, null]
 *      3[4, 5]
 *        [left, right] = [right, left]
 *
 * Pseudocode
 *  q = [root]
 *  while q.length
 *    node = shift q
 *    q push node left, node right
 *
 *    swap
 *      temp = node left
 *      node left = node right
 *      node right = temp
 *
 *  return root
 *
 *  - Time complexity: O(N)
 *  - Space complexity: O(log(N)), this is a breadth problem so it's O(N) if tree is balanced, depth would be O(log(N)) except for the imbalanced edge case
 *
 */

function invertBF(root) {
  let q = [root];

  if (root === null) return;
  while (q.length) {
    current = q.shift();

    if (current) {
      //action
      const temp = current.left;
      current.left = current.right;
      current.right = temp;

      //queue
      q.push(current.left);
      q.push(current.right);
    }
  }
  return root;
}

/////////////////// Testing ////////////////

// Node class for a binary tree node
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Generates tree from array
function deserialize(arr) {
  if (arr.length === 0) {
    return null;
  }
  let root = new TreeNode(arr[0]);
  let queue = [root];
  for (let i = 1; i < arr.length; i += 2) {
    let current = queue.shift();
    if (arr[i] !== null) {
      current.left = new TreeNode(arr[i]);
      queue.push(current.left);
    }
    if (arr[i + 1] !== null && arr[i + 1] !== undefined) {
      current.right = new TreeNode(arr[i + 1]);
      queue.push(current.right);
    }
  }
  return root;
}

// Create a tree
const arr = [1, 2, 3, null, null, 4, 5];
const sampleTree = deserialize(arr);

//Compare the output
console.log("BFS: Initial tree");
console.log(sampleTree);
console.log('----------------------------------')
console.log("Inverted Tree");
console.log(invertBF(sampleTree));