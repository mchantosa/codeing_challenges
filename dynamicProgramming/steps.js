/** Problem: Steps (Dynamic Programming Approach)
 * You have a set of stairs with n stets to climb, and you can take 1, 2, or 3 steps at a time.
 * 
 * How many ways are there to get to the top of the stairs?
 */

/** Solution:
 * For each step, the number of ways to get to that step is the sum of the number of ways to get 
 * to the previous three steps.
 * 
 * What is the root? n
 * 
 * What is the recursion relationship? F(n) = F(n-1) + F(n-2) + F(n-3)
 * 
 * Base cases:
 *  F(3) = |{(1, 1, 1), (1, 2), (2, 1), (3)}| = 4
 *  F(2) = |{(1, 1), (2)}| = 2
 *  F(1) = |{(1)}| = 1
 *  F(0) = |{}| = 0
 * 
 * Complexity:
 *     Time: O(n)
 *   Space: O(n)
 * Complexity without memoization:
 *     Time: O(3^n)
 *   Space: O(n)
 * 
 */

function stepsTab(n){
    //base cases
    const dp = [0, 1, 2, 4];

    for(let i = 4; i <= n; i++){
        dp[i] = dp[i-1] + dp[i-2] + dp[i-3];
    }

    return dp[n];
}

function stepsMemo(n){
    //base cases
    const dp = [0, 1, 2, 4].concat(new Array((n-4>=0)? n : 0).fill());

    const helper = (n) => {
        if(dp[n] !== undefined) return dp[n];
        else {
            dp[n] = helper(n-1) + helper(n-2) + helper(n-3);
            return dp[n];
        }
    }

    return helper(n);
}

////////////////////////////////////////////////////////////
/////////////////////  TEST BELOW!!!  //////////////////////
////////////////////////////////////////////////////////////

//[0, 1, 2, 4, ..., (50)=10562230626642]

console.log(stepsTab(3) === 4);
console.log(stepsTab(4) === 7);
console.log(stepsTab(5) === 13);
console.log(stepsTab(6) === 24);
console.log(stepsTab(50) === 10562230626642);
console.log(stepsMemo(3) === 4);
console.log(stepsMemo(4) === 7);
console.log(stepsMemo(5) === 13);
console.log(stepsMemo(6) === 24);
console.log(stepsMemo(50) === 10562230626642);
