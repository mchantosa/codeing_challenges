# Dynamic Programming

## What is dynamic programming
An optimization applied to recursion.

### Tabulation
*  Bottom-up method. 
*  We start solving the problems from the base cases (bottom), then gather answers to the top. 
*  Using a table, fill the table and then figure out the solution to the problem based on the result on the table.

### Memoization 
*  Top down method. 
*  Recursively solve the problem
*  Then save off and reference subproblem solutions as you come upon them.

## What are some indicators I should use dynamic Programming? 
1. Recursion, no recursion, no DP!
1. Has an optimal substructure: 
    *  Optimal substructure: property that an optimal solution can be constructed from optimal solutions of subproblems. 
    *  OPT(n) = f(OPT(n-1), OPT(n-2), ...)
    *  Example: [House robber problem](https://leetcode.com/problems/house-robber/)

        ```jsx
        /**
            UNDERSTAND
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
         */

        console.log(robTab([1,2,3,1]) === 4)
        console.log(robTab([2,7,9,3,1]) === 12)

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
            * 
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
                if(0 || memo[n]) return memo[n]
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
        ```

## How to solve a dynamic programming problem

1. Come up with the recursive relationship
    1. Draw a decision tree
        * What is the root
        * Given the root what are the children
        * What are the leaves
1. Memoization or tabulation
    * f(a, b, c) your memo would be a map
        Map(key(a, b, c), value)
        can use an array if using integers as keys
1. Tabulation
    Essentially is a form a memoization but we start from base cases moving towards the root


## What is the run time & space complexity of a memoized recursive function?
    Basic recursion: Branch ^ N
        Without recursion, something like fibonacci is a DFS algorithm. 
        Size fib: 2^n
    Memoized: Linear
        Number of unique nodes in the recursive tree
    Tabular: Linear
        Number of unique nodes in the recursive tree






Dynamic Programming
What are some indicators I should use dynamic Programming
Condition 1: Recursion: No recursion, no DP!
DP is an optimization applied to recursion.


Other names:
Being able to divide into subproblems: Recursion
Optimal Substructure: Recursion
OPT(n) = F (OPT(k1 <n) ,  OPT(k2 <n), …)
Fib(n) = Fib(n-1) + Fib(n-2)
Divide and conquer: Recursion 
Condition 2: Overlapping Subproblems
Recursion tree has duplicate nodes

How do I solve a dynamic programming problem?
Come up with the recursive relationship
Draw the recursion/decision tree
What is the root?
Given the root, what are the children
What are the leaves
Memoization
f(a, b, c), your memo would be map  
Map: <K:<type_a, type_b, type_c>, V: <f_outout> >
If all input parameters are the same type:
Map: <K:[ ], V: <f_outout> >
When can I use a vector instead of the map?
If the key is a non-negative integer.
Tabulation
Essentially is a form of memoization but we start from base cases and move towards the root.
Looking up into memo (called table in this case) always hits
Do we still call the function recursively?
No, because every lookup in the memo (i.e. table) is a hit!


