const Graph = require("graph.js");

/**
 * Given an undirected graph, find out if it is a tree
 *
 * An undirected graph is a tree if
 *  - there is not a cycle
 *  - all of the vertices in a graph are connected
 *
 *
 * How to tell if a graph is acyclic?
 *  - Directed alg: Use DFS but have three states for each node (unvisited, beingVisited, visited)
 *
 *      A --> B --> C && A --> C
 *
 *  - Undirected alg: I run DFS, whenever I see a node has two or more visited neighbors, that means I have a cycle
 *
 *      A -- B -- C && A -- C
 *
 * How to check if the graph is connected
 *  - Union find
 *  - Run DFS/BFS for any node, and see if all nodes are visited (only for undirected graph)
 *  - Run DFS/BFS for all nodes, and see if all nodes are visited (only for undirected graph)
 */

function graphIsATree(graph) {
  // Take care of edge cases.
  if (Object.keys(graph).length == 0) {
    return true;
  }

  let visited = new Set();
  let hasCycle = false;
  function dfs(node) {
    visited.add(node);

    let visitedCnt = 0;
    for (const neighbor of graph[node]) {
      if (visited.has(neighbor)) {
        visitedCnt++;
      }

      if (visitedCnt >= 2) {
        hasCycle = true;
        return;
      }
    }

    // Our normal DFS loop
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }
  }

  // Run DFS from any node in the graph.
  dfs(Number(Object.keys(graph)[0]));

  const allVisited = visited.size == Object.keys(graph).length;

  return !hasCycle && allVisited;
}

// No cycle, all nodes connected
let adjLst1 = {
  0: [1, 2, 3],
  1: [0],
  2: [0],
  3: [0, 4],
  4: [3],
};

// Cycle (between 0, 1, 2)
let adjLst2 = {
  0: [1, 2, 3],
  1: [0, 2],
  2: [0, 1],
  3: [0, 4],
  4: [3],
};

// Disconnected node (5)
let adjLst3 = {
  0: [1, 2, 3],
  1: [0],
  2: [0],
  3: [0, 4],
  4: [3],
  5: [],
};

let adjLst5 = {};

console.log(graphIsATree(adjLst1)); // true
console.log(graphIsATree(adjLst2)); // false
console.log(graphIsATree(adjLst3)); // false
console.log(graphIsATree(adjLst5)); // true

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");
graph.addEdge("B", "D");

graph.dfsR("A");
graph.dfsI("A");
graph.bfsI("A");
