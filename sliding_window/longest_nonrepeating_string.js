/** Problem: Longest substring without repeating characters
 *
 * Input: string
 * Output: string
 *
 * Example1: (bbbbb)->  b
 * Example2: (pwwkew)-> (wke || kew)
 * Example3: (abcabcbb)-> abc
 */
/** UDPC
 * Understand
 *  - capitalization? yes
 *  - complexity constraints? keep it optimal
 *  - length of string? fits in memory
 *  - which to return if 2 or more of equal length? return any
 *  - empty input string []-> ""
 *
 * Diagram
 *  - How do you know it's a sliding window?
 *    - best in string, but not confined to string
 *    - longest, shortest, most repeating... something contiguous
 *  - Two phases of sliding window
 *    - Hunting:
 *    - Catchup:
 *
 *  set:              {}
 *  input:            pwwkew
 *  hunting pointer:  r
 *  catchup pointer:  l
 *  bestR:            4
 *  bestL:            2
 *    {w,k,e}
 *    pwwkew
 *      l r
 *  if (r-l) > (bestR-bestL+1), update
 *  return set concatenated
 *
 * Pseudocode
 *
 *  const set = new Set
 *  bestL = 0
 *  bestR = 0
 *  repeatedCharacters = 0
 *
 *  from (r = 0; i < str.length; i++){
 *    check right in map
 *      if not in map, add to map
 *        update bestLeft
 *        update bestRight
 *      if in map, catch up
 *        while right in map twice
 *          remove left
 *      add right to set
 *
 *  }
 *
 *  return str.slice(bestLeft, bestRight)
 *
 * - Time Space Complexity
 *    - Time: O(2N) -> O(N), you visit each character at most twice
 *    - Space: O(K) where K is your character set
 *
 * Code
 */

function longest(str) {
  const set = new Set();
  let bestL = 0;
  let bestR = 0;
  let l = 0;

  for (let r = 0; r < str.length; r++) {
    //hunting
    const strR = str[r];
    if (!set.has(strR)) {
      if (r - l > bestR - bestL) {
        bestR = r;
        bestL = l;
      }
    } else {
      while (l < r) {
        //catchup
        const strL = str[l];
        set.delete(strL);
        l++;
        if (strL === strR) break;
      }
    }
    set.add(strR);
  }
  return str.slice(bestL, bestR + 1);
}

console.log(longest("pwwkew")); //wke
console.log(longest("bbbbbbbbb")); //b
console.log(longest("abcabcbb")); //abc
