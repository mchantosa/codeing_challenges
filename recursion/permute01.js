/*
Non-Consecutive Ones
Given a positive integer n, return an array of all the binary strings of length n that DO NOT contain consecutive 1s.

Input: n (Integer)
Output: [Str] (Array of Strings)
Example
Input: 2
Output: ["00", "01", "10"]

Input: 3
Output: ["000", "001", "010", "100", "101"]



Whiteboarding
---
Understand
- Max n? - reasonable (tens)
- Space complexity/Time complexity constraints? Optimal
- Sort? no

Diagram
--
Input: 3
Output: ["000", "001", "010", "100", "101"]

                                      ""
                   "1"                                  "0"
                            "10"              "01"                  "00"
                      "101"        "100"            "010"      "001"      "000"


Pseudocode
--
TEMPLATE
---
function outer(...) {
  result = [];    // optional

  function inner(...) {
    // Base case(s)

    // Recursive case(s)
  }

  return inner(...);
  or
  return result;
}


function nonConsecutiveOnes(n) {
  result = [];

  function recurse(str) {
    // Base case(s)
    if (str.length === n) {
      result.push(str);
      return;
    }

    // Recursive case(s)
    recurse(str + '0');
    if (str[str.length - 1] !== '1') {
      recurse(str + '1');
    }
  }

  recurse("");      // root in our decision tree
  return result;
}

  n = 2
  ["00", "01", "10"]
                                      ""
                   "1"                                  "0"
                            "10"              "01"                  "00"


Time complexity: O(2^n)
Space: O(2^n) (including return array)
       O(n) => O(log(2^n))
Does it include the result array?

Code
*/

function nonConsecutiveOnes(n) {
  result = [];

  function recurse(str) {
    // Base case(s)
    if (str.length === n) {
      result.push(str);
      return;
    }

    // Recursive case(s)
    recurse(str + "0");
    if (str[str.length - 1] !== "1") {
      recurse(str + "1");
    }
  }

  recurse(""); // root in our decision tree
  return result;
}

console.log(nonConsecutiveOnes(200));
