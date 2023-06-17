/**
 * How to find the shortest distance in a graph
 *  - BFS only works for unweighted graphs or when all weights are equal and non negative
 *  - Dijkstra only works for non-negative edges: similar to BFS, but use a priority queue instead of a queue
 *  - Bellman-Ford only works when there is no negative cycle
 *  - There is no shortest path in a graph from nodes s to t, when there is a negative cycle if the cycle is reachable from s
 *  - Simple path is a Path where we visit each node at most once
 *    - Finding the shortest simple past exists even if there is a cycle
 */

/**
 * Given an unweighted, undirected graph which represents a metro map
 * - shortest distance between 2 points
 * - shortest path between 2 points
 */

function minDistance() {}

// Make sure you can rewrite DFS and BFS with your eyes closed!
function minStops(graph, start, end) {
  const q = [];
  let visited = new Set();
  const distances = {};
  // BFS, Dijkstra, and Bellman-Ford
  let predecessor = {};

  q.push(start);
  visited.add(start);
  distances[start] = 0;

  while (q.length > 0) {
    const currentIndex = q.shift();

    if (currentIndex === end) {
      return distances[end];
    }

    for (const neighbor of graph[currentIndex]) {
      if (!visited.has(neighbor)) {
        q.push(neighbor);
        visited.add(neighbor);
        distances[neighbor] = distances[currentIndex] + 1;
        predecessor[neighbor] = currentIndex;
      }
    }
  }

  // Happens when there is no path between start and end.
  return -1;
}

//      A
//     / \
//    B   C
//   / \   \
//  D   E---F--G

const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E", "G"],
  G: [],
};

console.log(minStops(graph, "A", "F")); // Expected output: 2 (A -> C -> F)
console.log(minStops(graph, "B", "D")); // Expected output: 1 (B -> D)
console.log(minStops(graph, "E", "C")); // Expected output: 2 (E -> F -> C)
console.log(minStops(graph, "A", "H")); // Expected output: -1 (No path exists)
console.log(minStops(graph, "A", "G")); // Expected output: 3

//  Runtime of DFS/BFS?
// O(|V|)?
// The correct answer: O(|V| + |E|)
