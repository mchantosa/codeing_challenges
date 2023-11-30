/**
 * You have a grid (n rows, m columns), you can either move right or down. 
 * How many ways can you get from the top left to the bottom right? 
 * If n = 4 and m = 5, count the ways to get from (0,0) to (3,4)?
 * 
 * 
 * Definition1 (Recursion):
 *      f(n,m) = number of ways to get to the bottom right
 *      if i > 3 or j > 4, out of bounds return 0
 *      if i === 3 and j === 4, return 1
 *      else return f(i+1, j) + f(i, j+1)
 * 
 *                          [S][R][ ][ ][ ]
 *                          [D][ ][ ][ ][ ]
 *                          [ ][ ][ ][ ][ ]
 *                          [ ][ ][ ][ ][*]
 * 
 *  Base cases:
 *     f(3,4) = 1
 *     f(*,5) = 0
 *     f(4,*) = 0
 * 
 *  Otherwise: 
 *    f(i,j) = f(i+1, j) + f(i, j+1)
 * 
 *  Time complexity: O(2^(n*m))
 *  Space complexity: O(n + m)
 * 
 *  Memoization: Top down approach, save off the results of the subproblems in a cache
 * 
 * 
 * Definition2 (Dynamic Programming): 
 *     f(n,m) = number of ways to get to the bottom right
 *     dp[3, 4]  ways to get from (0,0) to (3,4)
 *     dp[i,j] = dp[i+1, j] + dp[i, j+1]
 * 
 *                          [ 1][ 1][ 1][ 1][ 1]
 *                          [ 1][ 2][ 3][ 4][ 5]
 *                          [ 1][ 3][ 6][10][15]
 *                          [ 1][ 4][10][20][35]
 * 
 *  Base cases:
 *    dp[0,i] = 1
 *    dp[i,0] = 1
 * 
 *  Otherwise:
 *    dp[i,j] = dp[i+1, j] + dp[i, j+1] 
 * 
 *  Time complexity: O(n*m)
 *  Space complexity: O(n*m)
*/