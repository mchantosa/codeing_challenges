class GraphDirected {
  constructor() {
    this.vertices = new Map();
  }

  addVertex(vertex) {
    this.vertices.set(vertex, []);
  }

  addEdge(startVertex, endVertex) {
    this.vertices.get(startVertex).push(endVertex);
  }

  dfsRecursive(startVertex, callback) {
    const visited = new Set();
    this.dfsHelper(startVertex, visited, callback);
  }

  dfsHelper(vertex, visited, callback) {
    visited.add(vertex);

    callback(vertex);

    const neighbors = this.vertices.get(vertex);
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        this.dfsHelper(neighbor, visited, callback);
      }
    }
  }

  findAllPaths(startVertex, endVertex) {
    const visited = new Set();
    const paths = [];
    this.dfsFindPaths(startVertex, endVertex, visited, [startVertex], paths);
    return paths;
  }

  dfsFindPaths(vertex, endVertex, visited, currentPath, paths) {
    //Track visited vertices
    visited.add(vertex);

    if (vertex === endVertex) {
      paths.push([...currentPath]); // Add a copy of the current path
    } else {
      const neighbors = this.vertices.get(vertex);
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          currentPath.push(neighbor);
          this.dfsFindPaths(neighbor, endVertex, visited, currentPath, paths);
          currentPath.pop();
        }
      }
    }
    //Backtrack
    visited.delete(vertex);
  }

  bfsIterative(startVertex) {
    const visited = new Set();
    const queue = [];
    visited.add(startVertex);
    queue.push(startVertex);

    while (queue.length > 0) {
      const currentVertex = queue.shift();

      // Process the current vertex here
      console.log(currentVertex);
      // ...

      const neighbors = this.vertices.get(currentVertex);
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }

  dfsIterative(startVertex) {
    const visited = new Set();
    const stack = [];
    visited.add(startVertex);
    stack.push(startVertex);

    while (stack.length > 0) {
      const currentVertex = stack.pop();

      // Process the current vertex here
      console.log(currentVertex);
      // ...

      const neighbors = this.vertices.get(currentVertex);
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          stack.push(neighbor);
        }
      }
    }
  }
};



const graph = new GraphDirected();

/**
 *                  A ---> D
 *                /   \
 *              B  --> C
 *             /  \     \
 *            E    F --> G
 * 
 */
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addVertex("G");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("B", "C");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("C", "G");
graph.addEdge("F", "G");

console.log(graph)

console.log("DFS Recursive");
const aggregate = [];
graph.dfsRecursive("A", (vertex) => aggregate.push(vertex));
console.log(aggregate);

graph.dfsIterative("DFS Iterative");
graph.dfsIterative("A");

console.log("BFS Iterative");
graph.bfsIterative("A");


