/** 
 * A staircase has n steps.
 * Rabbit is on step 0. 
 * Rabbit wants to get to the nth step.  
 * Rabbit can hop 1 or 2 steps at any given time.
 * How many ways can the rabbit get to the nth step?
 * 
 * Choice: rabbit can up 1 or 2 steps
 * Hence: If I'm at the nth step, I must have come from n-1 or n-2.
 * 
 *                                  5
 *                               /     \
 *                             4        3
 *                           /  \      /  \
 *                          3    2     2    1
 *                        / \   / \   / \   / \
 *                      2    1 1   0 1   0  0  -1
 * 
 * Definition: f(n) = number of ways to get to the nth step
 *            
 *  Base cases
 *          f(1) = 1
 *          f(2) = 2
 *  Otherwise
 *          f(n)= f(n-1) + f(n-2)
 *  
 *  Time complexity: O(n)
 *  Space complexity: O(n) 
 * 
 *  Memoization: Top down approach, save off the results of the subproblems in a cache
*/


function rabbitHop(n) {
    
}
