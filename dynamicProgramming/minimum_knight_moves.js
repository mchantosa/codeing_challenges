//https://leetcode.com/problems/minimum-knight-moves/description/

const { Queue } = require("../utilities/queue");

/**
    PROBLEM
        In an infinite chess board with coordinates from -infinity to 
        +infinity, you have a knight at square [0, 0]. A knight has 8 
        possible moves it can make, as illustrated below. Each move is 
        two squares in a cardinal direction, then one square in an 
        orthogonal direction. 

        Return the minimum number of steps needed to move the knight to 
        the square [x, y]. It is guaranteed the answer exists.

    EXAMPLES
        Example 1:
            Input: x = 2, y = 1
            Output: 1
            Explanation: [0, 0] → [2, 1]

        Example 2:
            Input: x = 5, y = 5
            Output: 4
            Explanation: [0, 0] → [2, 1] → [4, 2] → [3, 4] → [5, 5]
 

    CONSTRAINTS
        - -300 <= x, y <= 300
        - 0 <= |x| + |y| <= 300
 */

const minKnightMoves = (x, y) => {
    /**
     * 
     * Children are the 8 possible positions
     * Track level
     * Return level when square is encountered
     * 
     * bfs
     * 
     *      let queue
     *      enqueue([0, 0, 0])
     *      let visited
     * 
     *      while queue not empty
     *          node = dequeue [x,y,level]
     *          visited add 'x,y'
     *          for node.children
     *              if childX === x and childY === y
     *                  return level + 1
     *              else if child not in visited
     *                  enqueue node children [x, y, level + 1]
     *              
     */
    if(x===0 && y === 0) return 0;

    const queue = new Queue();
    const visited = new Set();
    queue.enqueue([0, 0, 0])

    while(!queue.isEmpty()){

        const node = queue.dequeue()
        const [_x, _y, level] = [...node]
        visited.add(`${_x},${_y}`)

        const children = [
            [_x+2, _y+1], [_x+1, _y+2], 
            [_x-2, _y+1], [_x-1, _y+2],
            [_x+2, _y-1], [_x+1, _y-2],
            [_x-2, _y-1], [_x-1, _y-2]
        ]
        for(let i = 0; i < 8; i++){
            const child = children[i];
            if(child[0] === x && child[1] === y) {
                return level + 1
            } else if(
                    !visited.has(`${child[0]},${child[1]}`) && 
                    Math.abs(child[0]) + Math.abs(child[1]) <= 300
                ) {
                queue.enqueue([...child, level + 1])
            }
        }
    }
};

const minKnightMovesDP = (x, y) => {
    /**
     *  Q1 mirrors Q2, Q3, and Q4
     *  Q1 has symmetry over the diagonal
     *  You only need to map the Upper triangle of Q1
     * 
        [5   6   5   6   5   6   5   6   5   6]
        [4   5   4   5   4   5   4   5   6]
        [5   4   5   4   5   4   5   4]
        [4   3   4   3   4   3   4]
        [3   4   3   4   3   4]
        [2   3   2   3   4]
        [3   2   3   2]
        [2   1   4]  3
        [3   2]  1   2
        [0]  3   2   x 
         3   2   1   x  
         
         - Map x, y to |x|, |y|
         - if x > y, map to y, x

         base cases
            - if y = 0, return 0
            - if y = 1, return [3, 2][x]
            - if y = 2 return [2, 1, 4][x]
            - if y = 3 return [3   2   3   2][x]
            else if y = n, 
                build row from previous 2 rows
                
     */
    let _y = Math.abs(y)
    let _x = Math.abs(x)

    if(_x > _y){
        const temp = _y
        _y = _x;
        _x = temp;
    }

    const rows = [
        [0],
        [3, 2],
        [2, 1, 4],
        [3, 2, 3, 2]
    ]
    if(_y < 4) return rows[_y][_x];
    
    while(rows.length <= _y){
        const end = rows.length -1
        const rowLength = end + 2
        const row = []
        row.push(Math.min(rows[end][2], rows[end-1][1]) + 1)
        row.push(Math.min(rows[end][3], rows[end-1][2]) + 1)
        for(let i = 2; i < rowLength -1 ; i++){
            row.push(Math.min(rows[end][i-2], rows[end-1][i-1]) + 1)
        }
        row.push(rows[end][rowLength-3]+1)
        rows.push(row)
    }
    return rows[_y][_x]
};

console.log(minKnightMoves(2, 1) === 1)
console.log(minKnightMoves(5, 5) === 4)

console.log(minKnightMovesDP(2, 1))
console.log(minKnightMovesDP(5, 5))
console.log(minKnightMovesDP(2, 112))