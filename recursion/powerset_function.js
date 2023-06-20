/**
 * Problem: Given a string S, return P(S), the power set of S, an array
 * comprised of all possible substrings of S.
 *
 * Input: String S
 * Output: Array of substrings of S
 *
 * Example: powerset('abc') -> ['', 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc']
 *
 *
 * Understand
 *  - subsets are alphabetical: 'ab' present, 'ba' not present
 *  - empty set is included: ''
 *  - '' returns ['']
 *
 * Diagram
 *  - '': ['']
 *  - 'a': ['', 'a']
 *  - 'ab': ['', 'a', 'b', 'ab']
 *  - 'abc': ['', 'a', 'b', 'ab', 'c', 'ac', 'bc', 'abc']
 *  - this is an iterative approach
 *
 *                    ''                            depth: 0
 *        ''                 'a'                    depth: 1
 *    ''     'b'         'a'      'ab'              depth: 2
 *  '' 'c' 'b' 'bc'    'a' 'ac' 'ab' 'abc'          depth: 3 === word.length, add if
 *
 *  - Time and space complexity
 *    - Time: O(2^n)
 *    - Space: O(2^n)
 *
 * Pseudocode
 *  - Helper method recursion
 *    1. State variables
 *    2. Return state variables
 *    3. Instantiate and invoke helper method
 *    4. Base cases
 *    5. Recursive cases
 *
 *
 *    const results = []; //step 1
 *
 *    findCombos = (str, depth) =>{
 *      //step 4
 *        if(depth === word.length) results.push(str), return
 *      //step 5
 *        //left
 *        findCombos(str, depth + 1)
 *        //right
 *        findCombos(str + word[depth], depth + 1)
 *    } //step 3
 *
 *    findCombos('', 0);  //step 3
 *
 *
 *    return results; //step 2
 *
 * Code
 */

function powerSet(word) {
  const results = []; //step 1

  const findCombos = (str, depth) => {
    //step 4
    if (depth === word.length) {
      results.push(str);
      return;
    }
    //step 5
    findCombos(str, depth + 1); //left
    findCombos(str + word[depth], depth + 1); //right
  }; //step 3

  findCombos("", 0); //step 3

  return results; //step 2
}

console.log(powerSet("abc"));
