/**
 *  PROBLEM: Climbing Stairs
 * 
 *  LINK: https://leetcode.com/problems/climbing-stairs/description/
 * 
 *  DESCRIPTION: 
 *      You are climbing a staircase. It takes n steps to reach the top. 
 *      Each time you can either climb 1 or 2 steps. In how many distinct 
 *      ways can you climb to the top?
 * 
 *  EXAMPLES:
        Example 1:
            Input: n = 2
            Output: 2
            Explanation: There are two ways to climb to the top.
                1. 1 step + 1 step
                2. 2 steps
 
        Example 2:
            Input: n = 3
            Output: 3
            Explanation: There are three ways to climb to the top.
                1. 1 step + 1 step + 1 step
                2. 1 step + 2 steps
                3. 2 steps + 1 step
 *  CONSTRAINTS:
 *      1 <= n <= 45
 * 
 *  ANALYSIS:
 *    
 *         Recursive: true
 *                                              5
 *                                     1 step /   \ 2 steps
 *                                          4   +   3
 *                                       /  \       /  \
 *                                      3  +  2    2  +  1
 *                                     / \
 *                                    2 + 1
 * 
 *         Optimal substructure:
 *              f(5) = f(4) + f(3)
 *              f(4) = f(3) + f(2)
 *              ...
 *              f(n) = f(n-1) + f(n-2)
 * 
 *         Base cases:
 *              f(1) = 1
 *              f(2) = 2
 * 
 *  COMPLEXITY:
 *      Time: O(n)
 *      Space: O(n)
 */

console.log(stairsTab(2) === 2)
console.log(stairsMem(2) === 2)
console.log(stairsTab(3) === 3)
console.log(stairsMem(3) === 3)

//BOTTOM UP: Tabulation
function stairsTab(n){
    /**
     *  PSEUDOCODE
     *      if(n === 1) return 1
     *      else if(n == 2) return 2
     *      else
     *          dp = [1, 2]
     *          for(i = 3, i <= n, i++)
     *              dp.push(dp[0] + dp[1])
     *              dp.shift()
     *          return dp[1]     
     */
    if(n === 1) return 1
    else if(n==2) return 2
    else {
        const dp = [1, 2]
        for(let i = 3; i <= n; i++){
            dp.push(dp[0]+dp[1])
            dp.shift()
        }
        return dp[1]
    }
}

//TOP DOWN: Memoization
function stairsMem(n){
    /**
     *  PSEUDOCODE
     *      memo = [1, 2]
     *      
     *      helper(n){
     *          if(!memo[n-1]) memo[n-1] = helper(n-1) + helper(n-2)
     *          return memo[n-1]
     *      }
     *      return helper(n)
     */

    const memo = [1, 2]
    const helper = (n) => {
        if(!memo[n-1]) memo[n-1] = helper(n - 1) + helper(n - 2)
        return memo[n-1]
    }
    return helper(n)
}