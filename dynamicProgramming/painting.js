/** Painting problem:
 * 
 * You're painting the exterior of houses in a neighborhood. Each house has a
 * cost. Adjacent houses can't be painted on the same day because the paint
 * needs to dry.
 * 
 *
 * Given an array costs of house painting costs, return the maximum possible
 * cost while adhering to the constraint of not painting adjacent houses on the
 * same day.
 * 
 * Example 1:
 * Input: costs = [2, 7, 9, 3, 1]
 * Output: 12
 * Explanation: Paint the first, third, and fifth houses for a total cost of 2 +
 * 9 + 1 = 12.
 * 
 * Example 2:
 * Input: costs = [10, 5, 1, 20]
 * Output: 30
 * Explanation: Paint the first and fourth houses for a total cost of 10 + 20 = 30.
 *
 * Example 3:
 * Input: costs = [4, 1, 2, 3, 7]
 * Output: 13
 * Explanation: Paint the first, third, and fifth houses for a total cost of 4 +
 * 2 + 7 = 13.
 * 
 */

/** Solution:
 *      Start simple: 
 *          - What if you only have 1 house? F[k]   = k
 *          - 2 houses? F[k0, k1]                   = max(k0, k1)
 *          - 3 houses? F[k0, k1, k2]               = max(F[k0, k1], k2+F[0])
 *          - 4 houses? F[k0, k1, k2, k3]           = max(F[k0, k1, k2], k3+F[k0, k1])
 * 
 * Complexity:
 *     Time: O(n)
 *   Space: O(n)
 * Complexity without memoization:
 *    Time: O(2^n)
 *  Space: O(n)
 * 
 */

function paintHousesTab(costs) {
    const n = costs.length;
    const dp = new Array(n).fill();
    dp[0] = costs[0];
    dp[1] = Math.max(costs[0], costs[1]);
    dp[2] = Math.max(dp[1], dp[0] + costs[2]);  
    
    for(let i = 3; i < n; i++){
        dp[i] = Math.max(dp[i-1], dp[i-2] + costs[i]);
    }

    return dp[n-1];
}

function paintHousesMemo(costs) {
    const n = costs.length;
    const dp = new Array(n).fill(null);
    dp[0] = costs[0];
    dp[1] = Math.max(costs[0], costs[1]);
    dp[2] = Math.max(dp[1], dp[0] + costs[2]);  
    
    helper = (n) =>{
        //memoized cases
        if(n === 0 || dp[n]){
            return dp[n];
        }

        //recursive case
        const result = Math.max(helper(n-1), helper(n-2) + costs[n]);
        dp[n] = result;
        return result;
    }

    return helper(n-1);
}

console.log(paintHousesTab([2, 7, 9, 3, 1]) === 12);
console.log(paintHousesTab([10, 5, 1, 20]) === 30);
console.log(paintHousesTab([4, 1, 2, 3, 7]) === 13);
console.log(paintHousesMemo([2, 7, 9, 3, 1]) === 12);
console.log(paintHousesMemo([10, 5, 1, 20]) === 30);
console.log(paintHousesMemo([4, 1, 2, 3, 7]) === 13);