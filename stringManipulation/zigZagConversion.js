/** 
https://leetcode.com/problems/zigzag-conversion/

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);


Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"


Constraints:

1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000
*/



/** 

DIAGRAM

  "PAYPALISHIRING", 4
          str0 str1  str2  str3
    row0, [P,   A,     Y,     P], 0mod3 -> place 0..3
    row1, [ ,    ,     A,      ]  1mod3 -> place 2
    row2, [ ,   L,      ,      ]  2mod3 -> place 1 
    row3, [I,   S,     H,     I]  0mod3 -> place 0..3
    row4, [ ,    ,     R,      ]  1mod2 -> place 2
    row5, [ ,   I,      ,      ]  2mod3 -> place 1 
    row6, [N,   G,      ,      ]  3mod3 -> place 0..3

    str0 = "PIN"
    str1 = "ALSIG"
    str2 = "YAHR"
    str3 = "PI"

    str1 + str2 + str3 + str4 = PINALSIIYAHRPI 


PSEUDOCODE: s, n
  if number of rows = 1, return s
    direction = 1
    position = 0
  create strings['','','','']
    strings = []
    for(i = 0; i < n; i++)strings.push('')
  iterate over string
    traverse from left to right to left fill those column
      strings[position]+=string[i]
      if position = 0 && direction = -1, direction*=-1
      if position = n-1 && direction = 1, direction*=-1
      position+=direction
  concatenate columns
    return strings.join('')
*/

function convert(s, numRows){
  if(numRows === 1) return s

  let direction = 1;
  let position = 0;
  const strings = [];
  for(let i = 0; i < numRows; i++) strings.push('');

  for(let i = 0; i < s.length; i++){
    strings[position]+=s[i];
    if(position === 0 && direction === -1) direction*= -1;
    if(position === numRows - 1 && direction === 1) direction*= -1;
    position+=direction;
  }

  return strings.join('')
}  //90% faster than other solutions 80% less memory than other solutions

console.log(
  convert("PAYPALISHIRING", 4), 
  "\n",
  convert("PAYPALISHIRING", 4) === "PINALSIGYAHRPI"
)


/**
  P A Y
    P
  A L I
    S
  H I R
    I
  N G

  PAHNAPLSIIGYIR
*/
console.log(
  convert("PAYPALISHIRING", 3),
  "\n",
  convert("PAYPALISHIRING", 3) === "PAHNAPLSIIGYIR"
)

console.log(
  convert("A", 1),
  "\n",
  convert("A", 1)==="A"
)