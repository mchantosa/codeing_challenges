# Breadth-First Search (BFS) 

A graph traversal algorithm used to explore all the vertices (nodes) of a graph systematically and efficiently. The algorithm starts at the tree root and explores all nodes at the present depth prior to moving on to the nodes at the next depth level. Extra memory (usually a queue), is needed to keep track of the child nodes that were encountered but not yet explored.

BFS is not recursive. 

## Complexity
* **Time: O(V + E)**
  * BFS has a time complexity of O(V + E), where V is the number of vertices (nodes) and E is the number of edges in the graph. This reflects the work required to visit each vertex and to explore the adjacency list of each vertex, which cumulatively involves examining all edges in the graph.
* **Space Complexity: O(V)**
  * BFS requires the use of a queue data structure to keep track of the nodes to be explored, which makes it a memory-intensive algorithm for large graphs. However, for smaller graphs and when finding shortest paths, it can be a very effective and easy-to-implement algorithm.

## Logic

1. Start with a queue and enqueue the source node into it.
1. Mark the source node as visited to avoid revisiting it later.
1. While the queue is not empty, do the following:
    * Dequeue the front node from the queue.
    * Process the node (perform any desired actions on the node).
    * Enqueue all unvisited neighbors of the node into the queue and mark them as visited.


## The Queue (how to get around shifting)

A problem with the queue is that using an array with shift and push is inefficient. A double linked list is better, but JavaScript doesn't come with a double linked list. Here is a queue class which would be much more efficient to use than an array.

```javascript
  class Queue {
      constructor() {
          this.items = [];
          this.frontIndex = 0; // Track the front of the queue
          this.backIndex = 0; // Track the back of the queue
      }

      enqueue(item) {
          this.items[this.backIndex] = item; // Add item to the back
          this.backIndex++; // Increment back pointer
      }

      dequeue() {
          const item = this.items[this.frontIndex]; // Get the front item
          this.frontIndex++; // Increment front pointer
          // Optional: clear the value from the array to free memory
          this.items[this.frontIndex - 1] = undefined;
          return item;
      }

      isEmpty() {
          return this.frontIndex === this.backIndex; // Queue is empty when front and back are the same
      }
  }

  // Usage
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  console.log(queue.dequeue()); // 1
  console.log(queue.dequeue()); // 2
```

## Template
```javascript
function bfs(graph, root) {
  //create queue and visited
  let queue = new Queue()
  let visited = new Set()

  //add root to queue
  queue.enqueue(root)

  //while queue is not empty
    //dequeue head start element
    //and add children of start element
    //process element
    //add to start element to visited
  while(!queue.isEmpty()){
    const startElm = queue.dequeue()
    queue.enqueue(children) //depends on data structure of tree
    console.log(startElement)//example process
    visited.add()
  }

}
```

## When to use BFS: Path finding

* **Shortest Path Finding:** BFS can be used to find the shortest path between two nodes in an unweighted graph. Since BFS explores nodes layer by layer, the first time the destination node is reached, it guarantees the shortest path.

* **Connected Components:** BFS can be used to find all the connected components in an undirected graph.

* **Web Crawling:** BFS is used by search engines to crawl and index web pages on the internet. The process involves starting from a specific web page and exploring its linked pages level by level.

* **Social Network Analysis:** BFS can be used to find the degrees of separation between individuals in a social network, for example, finding the shortest path between two people in a friend network.

* **Puzzle Solving:** BFS can be applied to solve puzzles like mazes, sliding puzzles, and other path-finding games.


## [Problem List](https://leetcode.com/tag/breadth-first-search/)

1. [Same Tree](./same_tree.js)
1. [Symmetric Tree](./symetric_tree.js)
1. [Binary Tree Level Order Reversal]()
1. [Binary Tree Zigzag Level Order Reversal]()
1. [Maximum Depth of a Binary Tree]()