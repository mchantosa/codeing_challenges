/**
 * 
 * Problem: Longest Repeating Character Replacement
 *      Given a string s and an integer k. You can choose any character of the string 
 *      and change it to any other uppercase English character. You can perform this 
 *      operation at most k times.
 * 
 *      Return the length of the longest substring containing the same letter you can 
 *      get after performing the above operations.
 * 
 * Input:  String, Integer
 *         s ~ input string
 *         k ~ Number of operations
 * 
 * Output: Integer
 * 
 * Examples
 * 
 *      Example 1:
 *      Input: s = "ABAB", k = 2
 *      Output: 4
 *      Explanation: Replace the two 'A's with two 'B's or vice versa.
 *  
 *      Example 2:
 *      Input: s = "AABABBA", k = 1
 *      Output: 4
 *      Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
 *      The substring "BBBB" has the longest repeating letters, which is 4.
 * 
 * Constraints
 * 
 *      N ~ length of input string
 *      k ~ Number of operations
 *      Time Complexity: O(N)
 *      Auxiliary Space Complexity: O(k)
 *      s consists of English letters
 * 
 * Diagram
 * 
 *      k=1
 *      freq={}
 *      max_freq_count: 0
 * 
 *      "AABABBA"
 *         l
 *           r
 * 
 * Psuedocode
 *      OPTION 1:
 *      sliding_window(input sequence)
 *          initialize state related to window
 *          initialize left to 0
 * 
 *          for r in range 0 to length of input
 *
 *              update window state for expansion
 *
 *              while monotonic condition is not met
 *                  update window state for contraction
 *                  increment left
 *
 *              if current window has greater length than max_length, update max_length
 * 
 *      OPTION 2:
 *      sliding_window(input sequence)
 *          initialize state related to window
 *          initialize left to 0
 * 
 *          for r in range 0 to length of input
 * 
 *          update window state for expansion
 *              Update freq count of char at position r in input 
 *              If the updated freq count exceeds max_freq_count, update max_f_c
 *     
 *          if monotonic condition is not met
 *              update window state for contraction
 *              increment left
 *       
 *          if current window has greater length than max_length, update max_length
*/