'''
Given a rectangular matrix containing only the values “0” and “1”, where the values of “1” always appear in the form of a rectangular island and the islands are always separated row-wise and column-wise by at least one line of “0”s, count the number of islands in the given matrix. Note that the islands can diagonally adjacent.

Input: Matrix of elements with values either 0 or 1
Output: An integer which is the count of all rectangular islands
Output2: Return top left corner and botton right corner
Example
Input: [[0, 0, 0, 0],
        [0, 0, 0, 1],
        [0, 0, 1, 1],
        [0, 0, 1, 0]]
        

Output: [[[0,0],[1,1]], [[0,3],[1,3]], [[2,2],[3,2]]]

Input: [[0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 1, 0, 1],
        [0, 0, 0, 1]]

Output: 2

Input: [[1, 0, 0, 0],
        [0, 0, 0, 1],
        [0, 1, 0, 1],
        [0, 0, 0, 1]]

Output: 3


Whiteboarding
---
Understand
- [[]] ?
Yes, return 0
- Will there always be at least 1 island?
No
- What is the expected time and aux space complexity?
Keep it optimal
- Can we alter the matrix?
No

Diagram
       [[1, 1, 0, 1],
        [1, 1, 0, 1],
        [0, 0, 1, 0],
        [0, 0, 1, 0]]

       [[1, 0, 1, 0],
        [0, 1, 0, 1],
        [1, 0, 1, 0],
        [0, 0, 0, 1]]
[[3,3], [3,3]]
Pseudocode

def countIslands(matrix):
  total = 0
  
  for (i in range of len(matrix)):
    for (j in range of len(matrix[0])):
      if (matrix[i][j] == 1 and
        # at top row or element above == 0
        (i - 1 < 0 or matrix[i - 1][j] == 0) and
        # at left most col or element left = 0
        (j - 1 < 0 or matrix[i][j - 1] == 0)
      ):
        total = total + 1

  return total
      
Code

'''

def bfs(matrix, row, col):
  # TODO Code
  return

def dfs(matrix, row, col):

  # Traverse right
  while(col < len(matrix[0]) and matrix[row][col] == 1):
    col = col + 1
    
  # Traverse down
  while(row < len(matrix) and matrix[row][col - 1] == 1):
    row = row + 1
  
  return [row - 1, col - 1]
  

  '''
  # base case
  if row >= len(matrix) or col >= len(matrix[row]) or matrix[row][col] == 0:
    return [row, col]

  new_row, _ = dfs(matrix, row + 1, col)
  _, new_col = dfs(matrix, row, col + 1)

  return [new_row, new_col]
  '''

'''
Time complexity: O(row*col)
Auxillary Space complexity: O(max(row, col))
'''

def findTopLeftIslands(matrix):
  arr = []
  
  for i in range(len(matrix)):
    for j in range(len(matrix[0])):
      if (matrix[i][j] == 1 and
        # at top row or element above == 0
        (i - 1 < 0 or matrix[i - 1][j] == 0) and
        # at left most col or element left = 0
        (j - 1 < 0 or matrix[i][j - 1] == 0)
      ):
        arr.append([i,j])

  return arr

def findIslandsCoords(matrix):
  if matrix == [] or matrix == [[]]:
    raise Exception("Empty matrix")
  topLeft = findTopLeftIslands(matrix)
  arr = []

  for beginning in topLeft:
    end = dfs(matrix, beginning[0], beginning[1])
    arr.append([beginning, end])
    
  return arr

matrix =        []

print(findIslandsCoords(matrix))


'''
Count
Time complexity: O(nm)
Space complexity: O(1)

Coords
Time: O(nm)
Space: O(1) (exclude output)     O(nm) (include output)



Backtracking:
def matrix_backtrack(matrix):
    deltas = [(1,0), (-1,0), (0,1), (0,-1)]
    N = len(matrix)
    M = len(matrix[0])
    
    def get_neighbors(x,y):
        neighbors = []
        for dx, dy in deltas:
            if 0 <= x + dx < N and 0 <= y + dy < M:
                neighbors.append((x+dx, y+dy)) 


    ans = []
    def helper_dfs(x,y, path, state):
        
        # IMPLEMENT base case
        if ...is_basecase(state):
            ans.append( ... ) 
            return 

        saved_val = matrix[x][y]
        matrix[x][y] = -1

        # IMPLEMENT recursive case branching
        for neighbor in ...get_neighbors(state):
            
            # IMPLEMENT pruning logic
            if ...should_prune(neighbor):
                continue
            
            # IMPLEMENT state update for each branch
            new_state = ...update(state, branch)

            path.add(branch)
            dfs(new_state, path)
            
            path.pop()
        matrix[x][y] = saved_val

    return ans


'''

