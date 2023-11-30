/*
 *  Target Practice - Dynamic Programming
 */

'use strict';

/*
  *  Problem:  Coin Sum
  *
  *            Given an array of coins and a target total, return how many
  *            unique ways there are to use the coins to make up that total.
  *
  *  Input:    coins {Integer Array}, total {Integer}
  *  Output:   {Integer}
  *
  *
  *  Example:  Input:  [1,2,3], 4
  *
  *                    1+1+1+1
  *                    1+3
  *                    1+1+2
  *                    2+2
  *
  *            Output: 4
  *
  *
  *            Input:  [2,5,3,6], 10
  *
  *                    2+3+5
  *                    5+5
  *                    2+3+2+3
  *                    2+2+6
  *                    2+2+2+2+2
  *
  *
  *            Output: 5
  *
  *    Note:   You have an unlimited number of each coin type. All coins in the
  *            coin array will be unique
  *            Order does not matter. Ex: One penny and one nickel to create six
  *            cents is equivalent to one nickel and one penny
  * 
  *    Reference: https://www.youtube.com/watch?v=jaNZ83Q3QGc
  */

/** Solution:
 *  
 *                                                   4[1, 2, 3]
 *                                 /                                          \
 *                               1[1,2,3]                                    4[1,2]
 *                         /             \                            /                    \
 *                      -1[1,2,3]        1[1,2]                  2[1,2]                    4[1]
 *                                      /       \              /       \                 /      \
 *                                   -1[1,2]   1[1]        0[1,2]       2[1]            3[1]     4[]
 *                                             /  \                    /  \            /  \ 
 *                                           0[1] 1[]                1[1] 2[]         2[1]  3[] 
 *                                                                  /  \              /  \
 *                                                                0[1] 1[]          1[1]  2[]
 *                                                                                  /  \
 *                                                                                0[1] 1[]
 * 
 * 
 * Recursion: F(total, coins) = F(total - coins[n], coins) + F(total, coins.pop())
 *                        F(4, [1,2,3]) = F(3, [1,2,3]) + F(4, [1,2])
 * Tabulation: 
 *  F(<0, [1, 2, 3]) = 0
 *  F(0, [1, 2, 3]) = 1  //1 way to make 0
 *  F(1, [1, 2, 3]) = 1  //1 way to make 1
 *  F(2, [1, 2, 3]) = 
 *  F(3, [1, 2, 3]) = 
 *  F(3, [1, 2, 3]) = 
 *  F(n, coins) = 
 *
 * Base case:
 *     if total === 0, return 1
 *     if total < 0, return 0
 *     if coins.length === 0, return 0
 * 
 * 
 * Complexity:
 *      Time: O(2^n)
 *      Space: O(n)
 */

function coinSumMemo(coinArr, targetVal){
    
    let dp = {};

    const helper = (coinArr, targetVal) => {
        // base cases
        if (targetVal === 0) return 1;
        if (targetVal < 0) return 0;
        if (coinArr.length === 0) return 0;

        // check if we've already computed this value
        let key = `${coinArr.length}-${targetVal}`;
        if (dp[key]) return dp[key];

        // recursive case
        let result = helper(coinArr, targetVal - coinArr[coinArr.length - 1]) + helper(coinArr.slice(0, coinArr.length - 1), targetVal);
        dp[key] = result;
        return result;
    }

    
    return helper(coinArr, targetVal);
}

function coinSumTab(coinArr, targetVal){

    let dp = new Array(targetVal + 1).fill(0);
    dp[0] = 1;  //0 coins for 0

    for (let i = 0; i < coinArr.length; i++){   //iterate through coins
        for (let j = coinArr[i]; j <= targetVal; j++){  //iterate through dp
            //add the number of ways to make j - coinArr[i] to the number of ways to make j
            /**
             * i=1  [1,0,0,0,0]
             * coin1 = 1
             *  start   [1,0,0,0,0]
             *  j=1     [1,(0+1),0,0,0]
             *  j=2     [1,1,(0+1),0,0]
             *  j=3     [1,1,1,(0+1),0]
             *  j=4     [1,1,1,1,(0+1)]
             * coin2 = 2
             *  start   [1,1,1,1,1]
             *  j=2     [1,1,(1+1),1,1]
             *  j=3     [1,1,2,(1+1),1]
             *  j=4     [1,1,2,2,(1+2)]
             * coin3 = 3
             *  start   [1,1,2,2,3]
             *  j=3     [1,1,2,(2+1),3]
             *  j=4     [1,1,2,3,(3+1)]
             * 
            */

            dp[j] += dp[j - coinArr[i]];    
        }
    }
    
    return dp[targetVal];
    
}


// *** Tabulation ***
// Time Complexity:  O(n)
function coinSum(coins, total) {
    return coinSumTab(coins, total);
}



////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////


console.log('Coin Sum Tests');
let testCount = [0, 0];

assert(testCount, 'should work for first example case', () => {
  let test = coinSum([1,2,3], 4);
  return test === 4;
});

assert(testCount, 'should work for second example case', () => {
  let test = coinSum([2,5,3,6], 10);
  return test === 5;
});

assert(testCount, 'should work for a single coin', () => {
  let test = coinSum([2], 10);
  return test === 1;
});

assert(testCount, 'should work when there is no solution', () => {
  let test = coinSum([7, 15], 20);
  return test === 0;
});

assert(testCount, 'should work for variety of coins and large total', () => {
  let test = coinSum([78,10,4,22,44,31,60,62,95,37,28,11,17,67,33,3,65,9,26,52,25,69,41,57,93,70,96,5,97,48,50,27,6,77,1,55,45,14,72,87,8,71,15,59], 100);
  return test === 3850949;
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
