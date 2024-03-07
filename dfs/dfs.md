# Depth-First Search (DFS) 

A graph traversal algorithm used to explore all the vertices (nodes) of a graph. Unlike Breadth-First Search (BFS), which explores nodes level by level, DFS explores as far as possible along each branch before backtracking. It traverses as deep as possible along each branch before exploring other branches.

DFS is recursive.

## Complexity
**Time: O(V + E)** 

BFS has a time complexity of O(V + E), where V is the number of vertices (nodes) and E is the number of edges in the graph.

**Space Complexity: O(V)**

Space Complexity worst case scenario is V where all the nodes are stacked on top of each other. Space complexity in DFS is the depth of the matrix.

## Logic:

1. Start at a specified source node and mark it as visited.
1. Explore an unvisited neighbor of the current node.
1. If an unvisited neighbor is found, repeat step 2 recursively, starting from that neighbor.
1. If no unvisited neighbors are left, backtrack to the previous node and explore any remaining unvisited neighbors from there.
1. Continue this process until all nodes are visited.
1. DFS can be implemented using either recursion or an explicit stack. 

## Template
```javascript
function dfs(graph, node, visited) {
  // Mark the current node as visited and process it (you can perform any actions here)
  visited.add(node);
  console.log(node);

  // Recursively visit all unvisited neighbors of the current node
  for (let neighbor of graph[node]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }
}
```

## When to use:

* **Connected Components:** DFS can be used to find all the connected components in an undirected graph.

* **Solving Mazes and Puzzles:** DFS is useful in solving mazes and puzzles by exploring all possible paths and backtracking when a dead end is reached.

* **Path Finding:** DFS can be used to find a path between two nodes in a graph.

* **Detecting Cycles:** DFS can help in detecting cycles in a graph. If, during traversal, we encounter an edge leading to an already visited node (excluding the parent), it indicates the presence of a cycle.

## [Problem List](https://leetcode.com/tag/depth-first-search/)

1. [Binary Tree Inorder Traversal](./binary_tree_inorder_traversal)
1. [Validate Binary Search Tree](./validate_binary_search_tree)
1. [Print HTML Hierarchy](./print_html_hierarchy.js)