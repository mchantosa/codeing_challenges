const { Node, Tree } = require("./binary_tree");

/** Problem
 * Given a binary tree, find the maximum sum of values across the tree
 *
 * Input
 *  - parents: [-1, 0, 1, 2, 0, 4],
 *    - where -1 is the parent of node 0,
 *    - node 1 and node 4 are children of root node 0
 *    - node 2 is child of node 1
 *  - values: [1, 10, 10, -3, -1, 10]
 *    - root has a value of 1
 *    - node 1 has a value of 10
 * Output: 30, the maximum sum along the tree
 */
/** Whiteboarding
 * -------------------------------
 * Understand
 *    - This is not a binary search tree, there is no left <= node <= right
 *
 * Diagram
 *
 *               1 [-1]
 *              /       \
 *        10[p0, 1]   -1[p0, 4]
 *        /               /
 *      10[P1, 2]       10 [P4, 5]
 *      /
 *    -3[P2, 3]
 *
 * Pseudocode
 *  - Extend tree to cover and rewrite insert function to account for non left/right comparisons
 *
 * Code
 */
