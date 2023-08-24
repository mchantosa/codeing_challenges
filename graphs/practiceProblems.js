/*
 *  Target Practice - Graph Traversal
 */

'use strict';

/**
 *  1. For the example graph below, what an expected output if we printed
 *     each vertex value from vertex 0 outwards using:
 *
 *     a. BREADTH FIRST traversal:
 *     b. DEPTH FIRST traversal:
 *
 *     NOTE: The traversal should take care of redundancy and not print the same
 *           vertex value twice.
 *
 *     Example Graph:
 *
 *              2
 *            /   \
 *    0 ~~~ 1       4  ~~~ 5 ~~~ 3
 *            \   /   \   /
 *              7       6
 */


// DO NOT EDIT
// Vertex class
class Vertex{
  constructor(id){
    this.id = id !== undefined? id : null;
    this.edges = [];
  }
}

// DO NOT EDIT
// generate graph from int and array of arrays
function deserialize(n, edges){
  let vertices = {};
  while (n--){
    vertices[n] = new Vertex(n);
  }
  let v1;
  let v2;
  edges.forEach(edge => {
    v1 = edge[0];
    v2 = edge[1];
    vertices[v1].edges.push(vertices[v2]);
    vertices[v2].edges.push(vertices[v1]);
  });

  return vertices[0];
}

// DO NOT EDIT
// sampleGraph is the vertex with id 0
const sampleGraph = deserialize(8, [[0, 1], [1, 2], [2, 4], [3, 5], [4, 5],
                                    [1, 7], [4, 6], [4, 7], [5, 6]]);

/**
 *  1. Implement Breadth First Search using a queue and while loop.
 *
 *  Input: {Vertex} - the starting vertex
 *  Output: {Array} - an array of vertex ids of the path
 *
 *  NOTE: You may use an array or linked list for your queue.
 *
 *  HINT: Use a set or hash table to handle redundancy
 */

function bfs(vertex){
  // YOUR WORK HERE
  return [20];
}

/**
 *  2. Given a starting vertex, and an integer destination, return all valid
 *     paths for a given source and destination.
 *
 *  Input: {Vertex} - the starting vertex
 *         {Destination} - integer value of the destination vertex
 *  Output: {Array} - an array of arrays of integers
 *
 *  HINT: Use a set or hash map to handle redundancy
 *
 *  NOTE: Please be aware that this problem is a slight variation
 *    of the HackerRank challenge that was provided in class. How would you
 *    handle things differently if each path returned needed to be a list?
 */

function dfs(vertex, destination){
  // YOUR WORK HERE
  // return [];
}


////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////


function assert(count, name, test) {
  if(!count || !Array.isArray(count) || count.length !== 2) {
    count = [0, '*'];
  } else {
    count[1]++;
  }

  let pass = 'false';
  let errMsg = null;
  try {
    if (test()) {
      pass = ' true';
      count[0]++;
    }
  } catch(e) {
    errMsg = e;
  }
  console.log('  ' + (count[1] + ')   ').slice(0,5) + pass + ' : ' + name);
  if (errMsg !== null) {
    console.log('       ' + errMsg + '\n');
  }
}

function arraysMatching(arr1, arr2) {
  if (arr1.length !== arr2.length) { return false; }

  let cache = {};
  for (let i = 0; i < arr1.length; i++) {
    if (cache[arr1[i]] === undefined) {
      cache[arr1[i]] = 1;
    } else {
      cache[arr1[i]]++;
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    if (cache[arr2[j]] === undefined || cache[arr2[j]] === 0) { return false; }
    cache[arr2[j]]--;
  }
  return true;
}

function getNeighbors(vertex, visited) {
  let edges = vertex.edges;
  return edges.filter((neighbor) => {
    return visited[neighbor.id] === undefined;
  });
}

function getValues(vertices) {
  return vertices.map((vertex) => {
    return vertex.id;
  });
}

function removeVisited(vertices, visited) {
  return vertices.filter((vertex) => {
    return !visited.has(vertex);
  });
}

// takes in an array of path and a vertex start point and determines whether
// the bfs is valid
function validBfs(path, start) {
  if (path[0] !== start.id) { return false; }

  let current = start;
  let visited = {};
  visited[current.id] = current;
  for (let i = 0, j = 1; i < path.length; i++) {
    if (i >= j) { return false; }
    let neighbors = getNeighbors(current, visited);
    let values = getValues(neighbors);
    if (!arraysMatching(values, path.slice(j, j + values.length))) {
      return false;
    }
    j += values.length;
    neighbors.forEach((vertex) => {
        visited[vertex.id] = vertex;
    });
    current = visited[path[i + 1]];
  }

  return true;
}

function validDfs(paths, source, destination) {

  for (let path of paths) {
    if (path[0] !== source.id) {
      return false;
    }
    if (path[path.length - 1] !== destination) {
      return false;
    }
    let current = source;
    let isValid = false;
    for (let node = 1; node < path.length; node++) {
      let neighbors = current.edges;
      for (let neighbor of neighbors) {
        if (neighbor.id === path[node]) {
          isValid = true;
          current = neighbor;
          break;
        }
      }
      if (isValid === false)
      {
        return false;
      }
    }
  }

  /* sometimes you hit here if the input is an empty array */
  /* check that there is a valid path through doing dfs */

  function testDfs(current) {
    if (visited.has(current.id)) { return false; }
    visited.add(current.id);
    if (current.id === destination) { return true; }
    let neighbors = current.edges;
    for (let neighbor of neighbors) {
      if (visited.has(neighbor.id) == false) {
        if (testDfs(neighbor)) { return true; }
       }
    }
    visited.delete(current.id);
    return false;
  }

  let visited = new Set();
  if (testDfs(source) && (paths === undefined || paths.length == 0 )) { return false; }
  return true;

}


const testGraph = deserialize(8, [[0, 1], [1, 2], [2, 4], [3, 5], [4, 5],
                                  [1, 7], [4, 6], [4, 7], [5, 6]]);

console.log('Breadth First Search tests');
let testCount = [0, 0];

assert(testCount, 'able to return the elements of a graph in breadth first manner', () => {
  let results = bfs(testGraph);
  return validBfs(results, testGraph);
});

assert(testCount, 'should return only starting initial node if no edges exist in graph', () => {
  let noEdgeGraph = deserialize(8, []);
  let results = bfs(noEdgeGraph);
  return validBfs(results, noEdgeGraph);
});

assert(testCount, 'should return elements of simple graph: 0 - 1 - 2 starting at 0', () => {
  let simpleGraph = deserialize(3, [[0,1],[1,2]]);
  let results = bfs(simpleGraph);
  return validBfs(results, simpleGraph);
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('Depth First Search tests');
testCount = [0, 0];

assert(testCount, 'should return valid dfs for connected graph with a cycle', () => {
  let results = dfs(testGraph, 3);
  let destination = 3;
  return validDfs(results, testGraph, destination);
});

assert(testCount, 'should return valid dfs for connected graph with no cycle', () => {
  let source = deserialize(6, [[0, 1], [1, 5], [1, 2], [2, 4], [4, 3]]);
  let destination = 3;
  let results = dfs(source, destination);
  return validDfs(results, source, destination);
});

assert(testCount, 'should return valid dfs for unconnected graphs with a path', () => {
  let source = deserialize(7, [[5,1], [5,6], [1,2], [2,4], [0,3]]);
  let destination = 3;
  let results = dfs(source, destination);
  return validDfs(results, source, destination);
});

assert(testCount, 'should return valid dfs for unconnected graphs with no path', () => {
  let source = deserialize(7, [[0,1], [1,6], [1,2], [2,4], [5,3]]);
  let destination = 3;
  let results = dfs(source, destination);
  return validDfs(results, source, destination);
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');
