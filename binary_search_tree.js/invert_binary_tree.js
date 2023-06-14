/**
 * Invert a Binary Tree 
 * Given a binary tree root node, invert the binary tree mirror and return back the root node
 * 
 * input: node ina binary tree
 * output: node in a binary tree
 * 
 * example:
 * 
 * 
 * Whileboarding
 * -----------------------------
 * Understand
 *  - how many nodes? 0? max?
 *  - integers: yes
 * Diagram
 *  - breadth first
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
 * 
 *  - Time complexity: O(N)
 *  - Space complexity: O(log(N)), this is a breadth problem so it's O(N) if tree is balanced, depth would be O(log(N)) except for the imbalanced edge case
 * Code
 */















/**
 * /*
Invert a Binary Tree
Given a binary tree root node, invert the binary tree (mirror) and return back the root node.

Input: Node in a Binary Tree
Output: Node in a Binary Tree
Example
Input: InvertBinaryTree1

Output: InvertbinaryTree2


              1
          /       \
        2           3
                /       \
               4         5

            1
        /         \
       3           2
    /     \
   5       4

Whiteboarding
---
Understand
- How many nodes? 0? Max?
  0 => None, Max - Fit in memory
- integers?
  Yes


Diagram
[]

              1
          /       \
        3           2
    /       \
   5         4            

2^32 => 4Gig

              1
          1        1
    1        1
    ...

 1 11 1 1 1 1 1 1 1 1 1 1 1 1 1   


 2 billion

Pseudocode
function invert(...) {
  q = [...];

  while (q.length) {
    val = q.pop()
    # preorder
    q.push(...)
    # inorder
    q.push(...)
    # postorder
  }

  return
}

Time complexity: O(n)
Space: O(n)

Code

*/

// DO NOT EDIT
// Node class for a binary tree node
class TreeNode {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

// DO NOT EDIT
// generate tree from array
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

// DO NOT EDIT
const arr = [1, 2, 3, null, null, 4, 5];

const sampleTree = deserialize(arr);

const invertBF = (root) => {
  q = [root];

  while (q.length) {
    let val = q.shift();
    const temp = val.left;
    val.left = val.right;
    val.right = temp;

    if (val.left != null) {
      q.push(val.left);
    }
    if (val.right != null) {
      q.push(val.right);
    }

  }

  return root;
};

const invertDF = (root) => {
	if (root === null) {
		return;
	}
	const temp = root.left;
	root.left = root.right;
	root.right = temp;

	invertDF(root.left);
	invertDF(root.right);

	return root;
};
console.log(sampleTree, 'DFS: Initial tree');
console.log(invertDF(sampleTree), 'Inverted Tree');

console.log(sampleTree, 'BFS: Initial tree');
console.log(invertBF(sampleTree), 'Inverted Tree');
 */