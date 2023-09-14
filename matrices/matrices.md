# Matrices

## How do I solve a Matrix problem?

- Nested for loop
- A matrix is a special case of a graph
  - search algorithms: dfs, bfs
  - dynamic programming, particularly if
    there is a restriction on movement
- Visiting can often be marked in the matrix
  itself
- Backtracking/brute force

## Write a template for backtracking on a matrix

backtracking_on_matrix(matrix):
  define empty ans variable
  define helper_dfs(x, y, path):
    if success base case
       append to the ans variable (might be a copy)
       return
    save matrix[x][y] value
    overwrite matrix[x][y] value with a marker
    for each of (x,y)'s neighbors
      add neighbor to the path
      helper_dfs(neighbor, path)
      remove neighbor from the path
    restore matrix[x][y] value

  helper_dfs(initial position, empty path)
  return ans
  
## What is the runtime and space complexity of a Matrix traversal algorithm?

Runtime: size of the matrix
Space: less than the size of the matrix (maybe larger dimension)

## What is the runtime and space complexity of a Matrix backtracking algorithm?

Runtime: 4^(size of matrix)
Space: size of matrix