# Bredth-First Search (BFS) 

A graph traversal algorithm used to explore all the vertices (nodes) of a graph systematically and efficiently. The algorithm starts at a specified source node and explores its neighbors at the present level before moving on to the next level of neighbors. In other words, BFS explores all the nodes at the current level before moving on to nodes at the next level.

## Logic

1. Start with a queue and enqueue the source node into it.
1. Mark the source node as visited to avoid revisiting it later.
1. While the queue is not empty, do the following:
    * Dequeue the front node from the queue.
    * Process the node (perform any desired actions on the node).
    * Enqueue all unvisited neighbors of the node into the queue and mark them as visited.

## Complexity

* **Time complexity:** O(V + E)
* **Space complexity:**

BFS has a time complexity of O(V + E), where V is the number of vertices (nodes) and E is the number of edges in the graph. Additionally, BFS requires the use of a queue data structure to keep track of the nodes to be explored, which makes it a memory-intensive algorithm for large graphs. However, for smaller graphs and when finding shortest paths, it can be a very effective and easy-to-implement algorithm.

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

* **Shortest Path Finding:** BFS can be used to find the shortest path between two nodes in an unweighted graph. Since BFS explores nodes layer by layer, the first time the destination node is reached, it guarantees the shortest path.

* **Connected Components:** BFS can be used to find all the connected components in an undirected graph.

* **Web Crawling:** BFS is used by search engines to crawl and index web pages on the internet. The process involves starting from a specific web page and exploring its linked pages level by level.

* **Social Network Analysis:** BFS can be used to find the degrees of separation between individuals in a social network, for example, finding the shortest path between two people in a friend network.

* **Puzzle Solving:** BFS can be applied to solve puzzles like mazes, sliding puzzles, and other path-finding games.


*      Input: root, 4, 9 => 
 *                 5
 *              /     \
 *             2       7
 *                   /    \
 *                  4      8
 *                           \
 *                             9
 *      Output: 7
 * 

*      visited         queue
 *      []              [5]
 *      [5]             [2,7]
 *      [5,2]           [7]
 *      [5,2,7]         [4,8]
 *      [5,2,7,4]       [8]
 *      [5,2,7,4,8]     [9]
 * 
 * 
 *                             8
 *                        /         \
 *                    3                  12
 *                  /    \               /     \
 *                 0      5             10          18
 *               /   \   /  \          / \       /      \
 *             -4     2 4    6        8   11    15      21
 *             / \   /         \        \       /\       /\
 *           -5  -3 1           7         9   13  16   19  22
 *                                       
 *                                     
 * 
 *      visited                 queue
 *      []                      [8]
 *      [8]                     [3,12]
 *      [8,3]                   [12.0,5]
 *      [8,3,12]                [0, 5, 10, 18]
 *      [8,3,12,0]              [5,10,18,-4,2]
 *      [8,3,12,0,5]            [10,18,-4,2,4,6]
 *      [8,3,12,0,5,10]         [18,-4,2,4,6,8,11]
 *      [8,3,12,0,5,10,18]      [-4,2,4,6,8,11,15,21]
 *      [8,3,12,0,5,10,18,-4]   [2,4,6,8,11,15,21,-5,-3]
 *      ...