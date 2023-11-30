/** Problem
 * http://res.cloudinary.com/outco-io/image/upload/v1521248026/LowestCommonAncestor.png
 * 
 * Given the root node of a binary tree and two distinct values, find the lowest common ancestor.
 * 
 * Inputs and Output
 *      Input: Root Node, Two Integer Values
 *      Output: Integer Value of Lowest Common Ancestor
 * 
 * Examples
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
 * Constraints
 *      Time Complexity: O(N)
 *      Auxiliary Space Complexity: O(N)
 *      Integer values of nodes are all distinct.
 *      Binary Tree Node has the following properties:
 *          1. `value` (Integer)
 *          2. `right` (Binary Tree Node, default null)
 *          3. `left` (Binary Tree Node, default null)
 */




