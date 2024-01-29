# Depth-First Search (DFS) 

A graph traversal algorithm used to explore all the vertices (nodes) of a graph. Unlike Breadth-First Search (BFS), which explores nodes level by level, DFS explores as far as possible along each branch before backtracking. It traverses as deep as possible along each branch before exploring other branches.

## Logic:

1. Start at a specified source node and mark it as visited.
1. Explore an unvisited neighbor of the current node.
1. If an unvisited neighbor is found, repeat step 2 recursively, starting from that neighbor.
1. If no unvisited neighbors are left, backtrack to the previous node and explore any remaining unvisited neighbors from there.
1. Continue this process until all nodes are visited.
1. DFS can be implemented using either recursion or an explicit stack. Here's a simple recursive implementation of DFS:

## Complexity

* **Time complexity:**  O(V + E) where V is the number of vertices (nodes) and E is the number of edges
* **Space complexity:** O(V) where V is the number of vertices. It is actually depth, V represents the worse cas scenario where the three is completely imbalanced. If the tree was balanced, the space complexity would be the depth of the tree. 

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

// Example usage:
const graph = {
  1: [2, 3],
  2: [4, 5],
  3: [6],
  4: [],
  5: [7],
  6: [],
  7: []
};

const startNode = 1;
const visited = new Set();

dfs(graph, startNode, visited);
```

## When to use:

* Topological Sorting: DFS can be used to perform topological sorting on a directed acyclic graph (DAG), which is useful for scheduling tasks or dependencies.
* Connected Components: DFS can be used to find all the connected components in an undirected graph.
* Solving Mazes and Puzzles: DFS is useful in solving mazes and puzzles by exploring all possible paths and backtracking when a dead end is reached.
* Path Finding: DFS can be used to find a path between two nodes in a graph.
* Detecting Cycles: DFS can help in detecting cycles in a graph. If, during traversal, we encounter an edge leading to an already visited node (excluding the parent), it indicates the presence of a cycle.