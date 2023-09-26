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

////////////// BFS ////////////////
//Breadth First Search
//queue- note arr.shift is O(N), not the same as a queue O(1)

Tree.prototype.traverseBFS = function (action) {
  const queue = [this.root];

  if (this.root === null) return result;

  while (queue.length > 0) {
    let current = queue.shift();

    action(current);

    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }
};

////////////// DFS ////////////////
//Depth First Search

//Pre order
Tree.prototype.traverseDFSPre = function (action) {
  const traverse = (node, action) => {
    //base cases
    if (node === null) return;

    //action
    action(node);
    //recursive cases
    if (node.left) traverse(node.left, action);
    if (node.right) traverse(node.right, action);
  };

  traverse(this.root, action);
};

//In order
Tree.prototype.traverseDFSIn = function (action) {
  const traverse = (node, action) => {
    //base cases
    if (node === null) return;

    //recursive case left
    if (node.left) traverse(node.left, action);
    //action
    action(node);
    //recursive case right
    if (node.right) traverse(node.right, action);
  };

  traverse(this.root, action);
};

//In order
Tree.prototype.traverseDFSPost = function (action) {
  const traverse = (node, action) => {
    //base cases
    if (node === null) return;

    //recursive case
    if (node.left) traverse(node.left, action);
    if (node.right) traverse(node.right, action);
    //action
    action(node);
  };

  traverse(this.root, action);
};

////////////// TEST ////////////////
function test(){
  const myTree = new Tree();
  myTree.insert(4);
  myTree.insert(2);
  myTree.insert(5);
  myTree.insert(1);
  myTree.insert(3);
  myTree.insert(7);
  myTree.insert(6);
  myTree.insert(8);

  console.log(`myTree.root.value: ${myTree.root.value}`);

  const bfsArr = [];
  myTree.traverseBFS((node) => {
    bfsArr.push(node.value);
  });
  console.log(`bfsArr: ${bfsArr}`);

  const preArr = [];
  myTree.traverseDFSPre((node) => {
    preArr.push(node.value);
  });
  console.log(`preArr: ${preArr}`);

  const inArr = [];
  myTree.traverseDFSIn((node) => {
    inArr.push(node.value);
  });
  console.log(`inArr: ${inArr}`);

  const postArr = [];
  myTree.traverseDFSPost((node) => {
    postArr.push(node.value);
  });
  console.log(`postArr: ${postArr}`);
}

//test();


module.exports = { Node, Tree };