/** 
 *  PROBLEM: Unique Paths (Dynamic Programming Approach)
 * 
 *  LINK: https://leetcode.com/problems/unique-paths/
 *        https://projecteuler.net/problem=15
 *
 *  DESCRIPTION:
 *    There is a robot on an m x n grid. The robot is initially located 
 *    at the top-left corner (i.e., grid[0][0]). The robot tries to move 
 *    to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot 
 *    can only move either down or right at any point in time.
 * 
 *
 *  EXAMPLES:  
 *    Example 1: 
 *      Input: m = 3, n = 7
 *      Output: 28
 * 
 *    Example 2:
 *      Input: m = 3, n = 2
 *      Output: 3
 *      Explanation: There are three ways to move from TL to BR
 *        1. Right -> Down -> Down
 *        2. Down -> Down -> Right
 *        3. Down -> Right -> Down
 *  
 *  CONSTRAINTS:
 *    1 <= m, n <= 100
 * 
 *  ANALYSIS:
 *      Recursion: 
 *             f(3 x 2)           (2 x 2)   +  f(3 x 1) 
 *          
 *              [x][ ][ ]   =     [x][ ]    +
 *              [ ][ ][ ]         [ ][ ]       [x][ ][ ]
 *
 *             f(2 x 2)         f(1 x 2)  +  f(2 x 1)   
 *        
 *              [x][ ]     =       [x]    +      
 *              [ ][ ]             [ ]         [x][ ]
 * 
 *      Optimal substructure:
 *        m, n, > 1
 *          f(m, n) = f(m-1, n) + f(m, n-1)
 *           
 *      Base cases:
 *          f(1, n) = 1
 *          f(m, 1) = 1 
 *          f(1, 1) = 1
 * 
 *    COMPLEXITY:
 *      Time: O(mn) = one call for each grid element
 *      Space: O(mn) = the size of the grid itself (2n optimized)
 */

console.log(uniquePathsTab(3, 2) === 3)
console.log(uniquePathsMem(3, 2) === 3)
console.log(uniquePathsTab(3, 7) === 28)
console.log(uniquePathsMem(3, 7) === 28)
console.log(uniquePathsTab(1, 1) === 1)
console.log(uniquePathsMem(1, 1) === 1)
console.log(uniquePathsTab(10, 1) === 1)
console.log(uniquePathsMem(10, 1) === 1)
console.log(uniquePathsTab(1, 10) === 1)
console.log(uniquePathsMem(1, 10) === 1)
console.log(uniquePathsTab(3, 3) === 6)
console.log(uniquePathsMem(3, 3) === 6)
console.log(uniquePathsTab(10, 10) === 48620)
console.log(uniquePathsMem(10, 10) === 48620)

function uniquePathsTab(m, n){
  /**
   *  PSEUDOCODE
   *    dp = [[][][][]...] m+1 x []
   *    for(i = 1; i <= m; i++)
   *      for(j = 1; j<=n; j++)
   *        if(i == 1 or j == 1) dp[i][j] = 1 
   *        else{
   *            dp[i][j] = dp[i-1][j] + dp[i], [j-1]
   *        }
   *    return dp[m][n]
   * 
   */
  const dp = [new Array(n+1).fill(1)]
  for(let i = 2; i <= m; i++){
    dp.push([])
    for(let j = 1; j <= n; j++){
      if(j === 1) dp[1][j] = 1
      else {
        dp[1][j] = dp[0][j] + dp[1][j-1]
      }
    }
    dp.shift();
  }
  return dp[0][n]
}

function uniquePathsMem(m, n){
  /**
   * PSEUDOCODE
   * 
   *  memo = [[][][][]...], m + 1 x []
   *  helper(m, n) {
   *    if(m === 1 || n === 1) return 1
   *    else 
   *      if(!mem[m][n])mem[m][n] = helper(m-1, n) + helper(m, n-1)
   *      return mem[m][n]
   *  }
   *  helper(m, n)
   * 
  */
  const memo = Array.from({ length: m + 1 }, () => []);
  const helper = (m, n) => {
    if(m === 1 || n === 1) return 1
    else {
      if(!memo[m][n]) memo[m][n] = helper(m - 1, n) + helper(m, n - 1)
      return memo[m][n]
    }
  }
  return helper(m, n)
}