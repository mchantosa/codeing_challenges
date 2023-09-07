/** 
 * Leetcode link: 
 *      https://leetcode.com/problems/minimum-size-subarray-sum/description/
 * 
 * Problem
 *      Given an array of positive integers nums and a positive integer target, 
 *      return the minimal length of a subarray whose sum is greater than or equal 
 *      to target. If there is no such subarray, return 0 instead.
 * 
 * Examples
 * 
 *      Example 1:
 *      Input: target = 7, nums = [2,3,1,2,4,3]
 *      Output: 2
 *      Explanation: The subarray [4,3] has the minimal length under the problem constraint.
 * 
 *      Example 2:
 *      Input: target = 4, nums = [1,4,4]
 *      Output: 1
 * 
 *      Example 3:
 *      Input: target = 11, nums = [1,1,1,1,1,1,1,1]
 *      Output: 0
 * 
 * Constraints
 * 
 *      - array contains only positive integers
 *      - 1 <= target <= 10^9
 *      - 1 <= nums[i] <= 10^4
 *      - array size <= 10^5 (=> can't do quadratic time, becuase 10^5 * 10^5 > 10^7)
 * 
 * Diagram
 * 
 *      sum: 0
 *      target: 7
 *      min_length: 10^5+1, infinity
 * 
 *      [2,3,1,2,4,3]
 *       l
 *       r
 * 
 * Pseudocode
 * 
 *      sliding_window(input sequence)
 *          initialize state related to window
 *          initialize left to 0
 * 
 *          for r in range 0 to length of input
 * 
 *              update window state for expansion (add input[r] to sum)
 *              while sum >= target
 *              if current window is smaller than min_length
 *                  set min_length to current window length
 *              update window state for contraction (subtract input[l] from sum)
 *              increment left
 * 
 *          return win_length if it is less than its initial value, return 0 o.w.
 *   
 */