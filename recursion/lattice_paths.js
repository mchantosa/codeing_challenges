/**
 * Problem: Using pure recursion, count the number of paths from the
 * upper left to the bottom right lattice of m x n squares via vertices.
 * When moving through the lattice one can only move tot he adjacent
 * right hand corner or down.
 *
 * Input:
 *  Integer rows (m)
 *  Integer columns (n)
 *
 * Output:
 *  Integer paths
 *
 * Example:
 *  - (2, 3) -> 10
 *  - (2, 2) -> 6
 *
 * Understand
 *  (2, 2) =
 *    |{r, r, d, d},
 *    {r, d, r, d},
 *    {r, d, d, r},
 *    {d, d, r, r},
 *    {d, r, r, d},
 *    {d, r, d, r}| = 6
 *
 * Diagram
 *                        (0,0)
 *            (0, 1)                (1, 0)
 *      (0, 2)     (1, 1)     (2, 0)      (1, 1)
 *      (2, 1)  (2, 1)(1, 2)  (2, 1)   (2, 1)(1, 2)
 *      (2, 2)  (2, 2)(2, 2)  (2, 2)   (2, 2)(2, 2)
 *
 *  - Going OOB and then base case it rather than check first,
 *    makes for a more efficient algorithm
 *  - Requirement specifies "pure recursion,"  can't use helper functions
 *  - Start with (2,2) and work backwards
 *  - Time and Space complexity:
 *    - Time: O(2^(m+n))
 *    - Space: O(m+n)
 * Pseudocode
 *  - Base cases
 *    - If row < 0 or column < 0, return 0
 *    - If row = 0 and column = 0, return 1
 *  - Recursive cases
 *    - return travel left + travel up
 *
 * Code
 */

function latticePaths(row, col) {
  if (row < 0 || col < 0) return 0;
  if (row === 0 && col === 0) return 1;

  return latticePaths(row - 1, col) + latticePaths(row, col - 1);
}

/**
 * Pseudocode
 *  - Base cases
 *    - If row < 0 or column < 0, return 0
 *    - If row = 0 and column = 0, return 1
 *  - Recursive cases
 *    - store travel left + travel up
 *      - if there is no row, add a row
 *      - if there is no column, add the [row][col]
 *    - return store
 *
 *  - Time and Space complexity:
 *    - Time: O(m*n)
 *    - Space: O(m*n)
 *
 */
function latticePathsMemoize(row, col, tracker = []) {
  if (row < 0 || col < 0) return 0;
  if (row === 0 && col === 0) return 1;

  if (!tracker[row]) {
    tracker[row] = [];
  }
  if (!tracker[row][col]) {
    tracker[row][col] =
      latticePathsMemoize(row - 1, col, tracker) +
      latticePathsMemoize(row, col - 1, tracker);
  }
  return tracker[row][col];
}

console.log(latticePathsMemoize(2, 2));
console.log(latticePathsMemoize(2, 3));
