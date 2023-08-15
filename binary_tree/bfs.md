# Bredth-First Search (DFS) 

A graph traversal algorithm used to explore all the vertices (nodes) of a graph systematically and efficiently. The algorithm starts at a specified source node and explores its neighbors at the present level before moving on to the next level of neighbors. In other words, BFS explores all the nodes at the current level before moving on to nodes at the next level.

## Logic

1. Start with a queue and enqueue the source node into it.
1. Mark the source node as visited to avoid revisiting it later.
1. While the queue is not empty, do the following:
    * Dequeue the front node from the queue.
    * Process the node (perform any desired actions on the node).
    * Enqueue all unvisited neighbors of the node into the queue and mark them as visited.

## Complexity

* **Time complexity:**
* **Space complexity:**

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