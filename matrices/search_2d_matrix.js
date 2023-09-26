/** 
Write an efficient algorithm that searches for a value in an M x N matrix. This matrix has the following properties:

- Integers in each row are sorted from left to right
- The first integer of each row is greater than the last integer of the previous row.

Input: Matrix of Integers, Target Integer
Output: Boolean

'''
'''
Example 1:
Input:

matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]

target = 3
Output: True

Example 2:
Input:

matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]

target = 13
Output: False

'''
'''
Constraints
Time Complexity: O(log (N*M)) = O(log N + log M)
with M being the number of rows and N being the number of columns.
Auxiliary Space Complexity: O(1)

'''
'''
Diagram
target: 13

   j      
i [1,   3,  5,  7],
            
  [10, 11, 16, 20],
  
  [23, 30, 34, 50]

Nested loop algorithm runtime: O(MN)
Linear search + binary search: O(M + log N)
Binary search on last column + binary search on row: O(log M) + O(log N)

low = 0
hi = N*M - 1
mid = (low+hi)/2 (integer result)

if mid is 4, then we want
  i = 1 = floor(mid/N) 
  j = 0 = mid mod(N)

if mid is 5, then we want
  i = 1 = floor(5/4)
  j = 1 = 5 mod 4

*/