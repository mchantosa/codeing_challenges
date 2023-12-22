/** PROBLEM: Fibonacci (Dynamic Programming Approach)
 * 
 *  LINK: https://leetcode.com/problems/fibonacci-number/
 * 
 *  DESCRIPTION:
 *      Write a function that returns the nth number in the Fibonacci sequence
 *          F(0) = 0, F(1) = 1
 *          F(n) = F(n - 1) + F(n - 2), for n > 1.
 * 
 * 
 *  EXAMPLES:
 *      Fibonacci Sequence: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
 *          fib(1) = 1
 *          fib(5) = 5
 *          fib(6) = 8
 *          fib(9) = 34
 *          fib(12) = 144
 * 
 *  CONSTRAINTS:
 *      0 <= n <= 30
 * 
 *  ANALYSIS:
 *          
 *          Recursive: true
 * 
                                   F(5)
                                /       \
                            F(4)    +    F(3)
                            /  \         /  \
                        F(3) + F(2)   F(2) + F(2)
            
            Optimal substructure
                f(5) = f(4) + f(3)
                f(4) = f(3) + f(2)
                ...
                f(n) = f(n-1) + f(n-2)

            Base Cases
                f(0) = 0
                f(1) = 1

 *
 *  COMPLEXITY: 
 *      Time: O(n)
 *      Space: O(n)
 * 
 */ 
console.log(fibTab(1) === 1);
console.log(fibMem(1) === 1);
console.log(fibTab(5) === 5);
console.log(fibMem(5) === 5);
console.log(fibTab(6) === 8);
console.log(fibMem(6) === 8);
console.log(fibTab(9) === 34);
console.log(fibMem(9) === 34);
console.log(fibTab(12) === 144);
console.log(fibMem(12) === 144);

//BOTTOM UP: Tabulation
function fibTab(n) {
    /**
     *  PSEUDOCODE
     *      if(n = 0) return 0
     *      else if(n = 1) return 1
     *      else
     *          dp = [0, 1]
     *          for(i = 2; i <=n; i++)
     *              dp.push(dp[0] + dp[1])
     *              dp.shift()
     *          return dp[1]
     */

    if(n === 0) return 0
    else if(n === 1) return 1
    else {
        const dp = [0, 1]
        for(let i = 2; i <=n; i++){
            dp.push(dp[0] + dp[1])
            dp.shift()
        }
        return dp[1]
    }
}

//TOP DOWN: Tabulation
function fibMem(n) {
    /**
     *  PSEUDOCODE
     *      memo = [0, 1]
     *      helper(n){
     *          if(n !== 0 && !memo[n]) memo[n] = helper(n-2) + helper(n-2) 
     *          return memo[n]
     *      }
     *      return helper(n)
     */

    const memo = [0, 1]
    helper = (n) => {
        if(n !== 0 && !memo[n]) memo[n] = helper(n-2) + helper(n-1)
        return memo[n]
    }
    return helper(n)
}