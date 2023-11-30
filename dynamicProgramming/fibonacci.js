/** Problem: Fibonacci (Dynamic Programming Approach)
 * 
 *  Description: Write a function that returns the nth number in the Fibonacci sequence.
 */ 

/** Solution:
 * 
 * 1.   Create a cache (dp array) of size n+1, where dp[i] will represent the ith Fibonacci number.
 * 2.   Initialize the first two values of the cache to 0 and 1.
 * 3a.  Tabulate: Iterate through the remaining values of the cache, filling them in by adding the 
 *      previous two values.
 * 3b.  Memoize: Check if the nth value of the cache is null. If it is, fill it in by recursively 
 *      calling the function on n-1 and n-2.
 * 4.   Return the nth value of the cache.
 * 
 * 
 * Complexity:
 *     Time: O(n)
 *    Space: O(n)
 * Complexity without memoization:
 *    Time: O(2^n)
 *   Space: O(n)
 */


const fibonacciMemo = (n) =>{
    const cache = new Array(n+1).fill(null);
    //base cases
    cache[0]=0;
    cache[1]=1;

    helper = (n) =>{
        
        //memoized cases
        if(n === 0 || cache[n]){
            return cache[n];
        }

        //recursive case
        const result = helper(n-1) + helper(n-2);
        cache[n] = result;
        return result;
    }

    return helper(n);

}

const fibonacciTab = (n) =>{
    //create table (dp array)
    const dp = new Array(n+1);

    //base cases
    dp[0] = 0;
    dp[1] = 1;

    //fill table
    for(let i = 2; i <= n; i++){
        dp[i] = dp[i-1] + dp[i-2];
    }

    return dp[n];
}

////////////////////////////////////////////////////////////////
//////////////////////  TEST BELOW!!!  /////////////////////////
////////////////////////////////////////////////////////////////


//[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(fibonacciMemo(1) === 1);
console.log(fibonacciTab(1) === 1);
console.log(fibonacciMemo(5) === 5);
console.log(fibonacciTab(5) === 5);
console.log(fibonacciMemo(6) === 8);
console.log(fibonacciTab(6) === 8);
console.log(fibonacciMemo(9) === 34);
console.log(fibonacciTab(9) === 34);