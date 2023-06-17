module.exports = class Graph {
  constructor() {
    this.vertices = new Map();
  }

  addVertex(vertex) {
    this.vertices.set(vertex, []);
  }

  addEdge(startVertex, endVertex) {
    this.vertices.get(startVertex).push(endVertex);
    // For undirected graphs, you would also add:
    // this.vertices.get(endVertex).push(startVertex);
  }

  dfsR(startVertex) {
    const visited = new Set();
    this.dfsHelper(startVertex, visited);
  }

  dfsHelper(vertex, visited) {
    visited.add(vertex);

    // Process the current vertex here
    console.log(vertex);
    // ...

    const neighbors = this.vertices.get(vertex);
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        this.dfsHelper(neighbor, visited);
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

    visited.delete(vertex);
  }

  bfsI(startVertex) {
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

  dfsI(startVertex) {
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

[].for;
