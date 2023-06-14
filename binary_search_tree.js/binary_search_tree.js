// 1. Create state variable
// 2. Return state variable
// 3. Instantiate and invoke helper method
// 4. Base case
// 5. Recursive case

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {}

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    } else {
      const queue = [this.root];
      while (queue.length) {
        const current = queue.shift();
        if (!current.left) {
          current.left = newNode;
          return;
        } else {
          queue.push(current.left);
        }
        if (!current.right) {
          current.right = newNode;
          return;
        } else {
          queue.push(current.right);
        }
      }
    }
  }
  search() {}
  delete() {}
}

////////////// BFS ////////////////
/**
 *
 * Use a queue: first in first out
 *  Note:(a stack would be last in last out)
 *  Another note: if you use an array as a "queue"
 *    during an interview, be sure to acknowledge this
 *    because of the linearity of shift.
 */

Tree.prototype.traverseBFS = function () {
  const queue = [];
  let result = [];

  if (this.root === null) return result;
  queue.push(this.root);

  while (queue.length > 0) {
    let current = queue.shift();

    result.push(current.value);

    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }

  return result;
};

////////////// DFS ////////////////

//Pre order
Tree.prototype.traverseDFSPre = function (node, action) {
  if (node === null) return;
  action(node, action);
  this.traverseDFSPre(node.left, action);
  this.traverseDFSPre(node.right, action);
};

//[4,2,5,1,3,7,6,8]
////////////// TEST ////////////////

const myTree = new Tree();
myTree.insert(4);
myTree.insert(2);
myTree.insert(5);
myTree.insert(1);
myTree.insert(3);
myTree.insert(7);
myTree.insert(6);
myTree.insert(8);

console.log(myTree.root.value);
console.log(
  myTree.traverseDFSPre(myTree.root, (node) => {
    console.log(node.value);
  })
);
console.log(
  myTree.traverseBFS((node) => {
    console.log(node.value);
  })
);
