/** 

'''
Given an (MxN) (rectangular, not jagged) matrix of integers, return an array in spiral order.

Input: [[1,2,3],
        [4,5,6],
        [7,8,9]]

Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]


Input: [[]]

Output: []

Time Complexity: O(MN)
Auxiliary Space Complexity: O(MN)

The elements are all digits 0 through 9

Input: [[1,2,3,4]]

Output: [1, 2, 3, 4]

Diagram:

colStart: 1
colEnd: col-2
rowStart: 2
rowEnd: row-2



ans: [1, 2, 3, 6, 9, 8, 7, 4, 5]
           j
       [ -1, -1, -1, -1, -1
         -1, -1, -1, -1, -1
            -1    -1  -1
            -1   -1  -1
          -1  -1 -1   -1  -1
        [4,5,6],
        
      i [7,8,9]]

initialize start/end variables
create empty ans
initialize i and j to rowStart, colStart
while true:
  # scan right
  for i through colEnd
    copy matrix[i][j] to answer
  increment rowStart
  if rowStart > rowEnd: break
  
  # scan down
  decrement colEnd
  
  scan left
  decrement rowEnd
  
  scan up
  increment colStart
  


'''

*/