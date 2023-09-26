# Binary Trees 

A node tree where each parent can have two children. Each node with have a value and children (left, right).

## Common terms

* **Root:** First node or start node

* **Parent:** Node directly above referenced node in the node hierarchy

* **Child:** Node directly beneath referenced node in the node hierarchy 

* **Siblings:** Two children who share a parent

* **Depth:** How far you are from the root (the length of the longest path from the root to a leaf node)

* **Edge:** Relationship between a parent and it's child

* **Degree:** Number of edges a parent has

## Common tree methods

### Insert
To insert a new element into a binary tree, you must first find the appropriate location to insert it. If the tree is a binary search tree, you insert nodes in such a way that the left subtree contains smaller values, and the right subtree contains larger values.

### Search

### Remove

### Traversal:

*  Inorder Traversal (DFS): This method visits the nodes of a binary tree in ascending order. For a binary search tree (BST), it will give you a sorted list of elements. The algorithm is: left subtree, current node, right subtree.
*  Preorder Traversal (DFS): In this method, you visit the current node before its children. The algorithm is: current node, left subtree, right subtree.
*  Postorder Traversal (DFS): Here, you visit the current node after its children. The algorithm is: left subtree, right subtree, current node.
*  Level-order Traversal (Breadth-First Traversal or BFS): In this traversal, you visit nodes level by level, starting from the root and moving left to right at each level.