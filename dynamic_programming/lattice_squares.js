/** Problem: Lattice Paths (Dynamic Programming Approach)
 *
 *  Prompt:    Count the number of unique paths to travel from the top left
 *             to the bottom right of a lattice of squares.
 *
 *             NOTE: You are traveling along the **EDGES** of the lattice
 *
 *  Input:     An integer N (which is the width of the lattice)
 *             An integer M (which is the height of the lattice)
 *
 *  Output:    An interger (which represents the number of unique paths)
 *
 *  Example:   input: 2
 *
 *             (2 x 3 lattice of squares)
 *              __ __ __
 *             |__|__|__|
 *             |__|__|__|
 *
 *             output: 10 (number of unique paths from top left corner to bottom
 *                     right)
 *
 *             Diagram:
 *
 *             1__1__1__1
 *             |  |  |  |
 *             1__2__3__4
 *             |  |  |  |
 *             1__3__6__10
 *
 *  Notes:     What is the time and auxilliary space complexity of your solution?
 *
 *             When moving through the lattice, you can only move either down or
 *             to the right.
 *
 *             You did this problem before with recursion. Try implementing it
 *             now with dynamic programming!
 *
 *  Resources:
 *    1: https://projecteuler.net/problem=15
 *
 */


/** Solution:
 * 
 * 1.   Create a 2D array dp of size m+1 x n+1, where dp[i][j] will represent the 
 *      number of paths to reach cell (i, j).
 * 
 * 2.   Initialize the first row dp[0][j] and the first column dp[i][0] with 1 
 *      because there's only one way to reach any cell in the first row and the 
 *      first column (by moving only right or down).
 * 
 * 3.   Iterate through the remaining cells in the grid. For each cell (i, j), 
 *      the number of paths to reach it is the sum of the number of paths to the 
 *      cell above it (i-1, j) and the cell to the left of it (i, j-1).
 *      
 *                  dp[i][j] = dp[i-1][j] + dp[i][j-1]
 * 
 * 4.   Once you've filled in all the cells of the dp array, dp[m][n] will 
 *      contain the total number of paths from the top-left corner to the bottom-
 *      right corner of the grid.
 * 
 * 
 * Complexity:
 *      Time: O(M+1*N+1)
 *      Space: O(M+1*N+1)
 */

// Tabulation
  // Time Complexity: O(M*N)
  // Auxiliary Space Complexity: O(M*N)
  
function latticePaths(m, n) {

    //create dp arrap of 0s with row_0 and col_0 filled with 1s
    const dp = new Array(m+1).fill().map((element, index)=> {
        if (index === 0) return new Array(n+1).fill(1)
        else{
            const row = new Array(n+1).fill(0)
            row[0] = 1;
            return row;
        }
    })
    
    //fill remainder
    for(let i = 1; i <= m; i++){
        for(let j = 1; j <= n; j++){
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }

    return dp[m][n];

}

console.log('latticePaths(2, 3)',latticePaths(2, 3));

 ////////////////////////////////////////////////////////////
 ///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
 ////////////////////////////////////////////////////////////

 // code for capturing console.log output
 let record = [];
 (function () {
   let log = console.log;
   console.log = function () {
     record = record.concat(Array.prototype.slice.call(arguments));
     log.apply(this, Array.prototype.slice.call(arguments));
   };
 }());

 console.log('Lattice Paths Tests');
 let testCount = [0, 0];

 assert(testCount, 'should work for a 2 x 3 lattice', () => {
   let example = latticePaths(2, 3);
   return example === 10;
 });

 assert(testCount, 'should return the same for a 3 x 2 lattice', () => {
   let example = latticePaths(3, 2);
   return example === 10;
 });

 assert(testCount, 'should work for a 0 x 0 lattice', () => {
   let example = latticePaths(0, 0);
   return example === 1;
 });

 assert(testCount, 'should work for a 10 x 10 lattice (square input)', () => {
   let example = latticePaths(10, 10);
   return example === 184756;
 });

 assert(testCount, 'should work for a 20 x 15 lattice (large input)', () => {
   let example = latticePaths(20, 15);
   return example === 3247943160;
 });

 console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');

 // function for checking if arrays are equal
 function arraysEqual(arr1, arr2) {
   if(arr1.length !== arr2.length)
     return false;
   for(let i = arr1.length; i--;) {
     if(arr1[i] !== arr2[i])
       return false;
   }
   return true;
 }

 // function for checking if arrays contain same elements
 // (do not need to be in the same order)
 function arraysMatching(arr1, arr2){
   if (arr1.length !== arr2.length){
     return false;
   } else {
     let lib = {};
     for (let i = 0; i < arr1.length; i++){
       lib[arr1[i]] = true;
     }
     for (let j = 0; j < arr2.length; j++){
       if (lib[arr2[j]] === undefined){
         return false;
       }
     }
     return true;
   }
 }

 // custom assert function to handle tests
 // Array count : keeps track out how many tests pass and how many total
 //   in the form of a two item array i.e., [0, 0]
 // String name : describes the test
 // Function test : performs a set of operations and returns a boolean
 //   indicating if test passed
 function assert(count, name, test){
   if(!count || !Array.isArray(count) || count.length !== 2) {
     count = [0, '*'];
   } else {
     count[1]++;
   }

   let pass = 'false';
   let errMsg = null;
   try {
     if (test()) {
       pass = ' true';
       count[0]++;
     }
   } catch(e) {
     errMsg = e;
   }
   console.log('  ' + (count[1] + ')   ').slice(0,5) + pass + ' : ' + name);
   if (errMsg !== null) {
     console.log('       ' + errMsg + '\n');
   }
 }