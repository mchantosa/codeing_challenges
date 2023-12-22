/**
 *  PROBLEM: House Rubber
 *  
 *  LINK: https://leetcode.com/problems/house-robber/
 * 
 *  DESCRIPTION:
 *     You are a professional robber planning to rob houses along a street. Each house has a certain 
 *     amount of money stashed, the only constraint stopping you from robbing each of them is that 
 *     adjacent houses have security systems connected and it will automatically contact the police 
 *     if two adjacent houses were broken into on the same night. Given an integer array nums 
 *     representing the amount of money of each house, return the maximum amount of money you can rob 
 *     tonight without alerting the police.
 * 
 *  EXAMPLES:
 *      Example 1:
 *          Input: nums = [1,2,3,1]
 *          Output: 4
 *          Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
 *          Total amount you can rob = 1 + 3 = 4.
 * 
 *      Example 2:
 *          Input: nums = [2,7,9,3,1]
 *          Output: 12
 *          Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
 *          Total amount you can rob = 2 + 9 + 1 = 12.
 * 
 *  CONSTRAINTS:
 *      1 <= nums.length <= 100
 *      0 <= nums[i] <= 400
 * 
 *  ANALYSIS:
  
                Recursive:  true

                                                [0, 1, 2, 3, 4]
                                    /                               \
                            max([0, 1, 2, 3]()                      [0, 1, 2](4))
                                /          \                        /           \
                        max([0, 1, 2]()   [0, 1](3))          max([0, 1]()      [0](2))


                Optimal Substructure
                    f(4) = max(f(3), f(2) + V(4))
                    f(3) = max(f(2), f(1) + V(3))
                    f(2) = max(f(1), f(0) + V(2))
                    ...
                    f(n) = max(f(n-1), f(n-2) + V(n))

                Base cases
                    f(0) = V(0)
                    f(1) = Max(V(0), V(1))
   
 *  COMPLEXITY:
 *      Time: O(n)
 *      Space: O(n)
 */

console.log(`robTab([1,2,3,1]) === 4:       `, robTab([1,2,3,1]) === 4)
console.log(`robTab([2,7,9,3,1]) === 12:    `, robTab([2,7,9,3,1]) === 12)
console.log(`robMem([1,2,3,1]) === 4:       `, robMem([1,2,3,1]) === 4)
console.log(`robMem([2,7,9,3,1]) === 12:    `, robMem([2,7,9,3,1]) === 12)


//BOTTOM UP: Tabulation
function robTab(nums) {

    /**
     * PSEUDOCODE
     *      dp = []
     *      if(length === 1)................base case 1 
     *          dp[0] = V(0)
     *          return dp[0]
     *      else if (length === 2)..........base case 2 
     *          dp[1] = max(V(0), V(1))
     *          return dp[1]
     *      else............................recursive cases 
     *          for(i = 2; i < length; i++)
     *              dp[i] = max(dp[i-1], dp[i-2] + V(i))
     *          return dp[length-1]
    */
    const length = nums.length
    const dp = [nums[0]]    //dp spaced optimized, length remains <= 3
    
    if(length === 1) {
        return dp[0]
    }
    else{
        dp.push(Math.max(dp[0], nums[1]))
        for(let n = 2; n < length; n++){
            dp.push(
                Math.max(dp[1], dp[0] + nums[n])
            )
            dp.shift();
        }
        return dp[1]
    }    
};

//TOP DOWN: Memoization
function robMem(nums) {
    /**
     * PSEUDOCODE
     *      memo = []
     * 
     *      function helper(n), where n is index
     *          if(0 || memo[n]) return memo[n])
     *          base cases
     *              if(n === 0) return V(0)
     *              else if(n === 1) return max(V(0), V(1))
     *          recursive case
     *              value = max(helper(n-1), helper(n-2) + V(n)) 
     *              memo[n] = value
     *              return value
     * 
     *      return helper(nums.length-1)
    */
    
    const memo = [];
    const helper = (n) => {
        if(memo[n] === 0 || memo[n]) return memo[n]
        else if (n == 0) {
            memo[0] = nums[0]
            return memo[0]
        } else if (n == 1) {
            memo[1] = Math.max(nums[0], nums[1])
            return memo[1]
        } else {
            const value = Math.max(helper(n-1), helper(n-2) + nums[n])
            memo[n] = value;
            return memo[n];
        }
    }
    return helper(nums.length-1)
}