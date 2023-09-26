/** 
Given a matrix with N rows and M columns where elements in the matrix can be either 1 or 0 and each row and column are sorted in ascending order, find the number of 1s.

Input:          
   [[0, 0, 0, 1],
		[0, 0, 1, 1],
		[0, 1, 1, 1],
		[0, 1, 1, 1]]

Output: 9

Time Complexity: O(N + M)
Auxiliary Space Complexity: O(1)

              
   [[0, 0, 0, 1],
           
		[0, 0, 1, 1],
        
		[0, 1, 1, 1],
        j
i		[0, 1, 1, 1]]

sum = len(row)-j 1's in row 0
sum += len(row)-j 1's in row 1
sum += len(row)-j 1's in row 2

*/