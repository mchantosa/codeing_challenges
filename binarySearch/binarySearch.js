/**
    Suppose you have a sorted array and want to find an element in the array 
    of length n. You could start at 0 and traverse the array to n-1, stopping 
    when you find the element. This would be the simplest approach and have a 
    complexity of O(n).

    A more efficient approach would be to 

    1. Define the ends, 
    2. Check the middle
    3. Make the middle a new end
    4. Check the new middle
    5. Make the middle a new end
    6. … until you find the element for which you are looking.

    Find 8 in the array below: 6
    [0,  1,  3,  3,  3,  7,  8,  9,  9]
     L                               R
                     M   L           R
                         L   R   M 
                             M

    Find 5 in the array below: -1
    [0,  1,  3,  3,  3,  7,  8,  9,  9]
     L                               R
                     M   L           R
                         L   R   M 
                         LR  M
                     R   LM
 */

const arr = [0,  1,  3,  3,  3,  7,  8,  9,  9]

const binarySearchIterative = (arr, n) => {
    //Time Complexity: O(log(n))
    //Space Complexity: O(1)

    let left = 0;
    let right = arr.length-1;
    
    while(true){
        if(left>right) return -1

        const middle = Math.ceil((right+left)/2)
        if(arr[middle] === n) return middle

        if(arr[middle] < n) left = middle + 1
        else right = middle - 1
    }
}

const binarySearchRecursive = (arr, n) => {
    //Time Complexity: O(log(n))
    //Space Complexity: O(log(n))

    const left = 0;
	const right = arr.length-1;
  
    const helper = (l, r) => {
        //number does not exist
        if(l>r) return -1

        //base case
        const middle = Math.ceil((l+r)/2);
        if(arr[middle] === n) return middle

        //recursive cases
        else if(arr[middle] < n) return helper(middle + 1, r)
        else return helper(l, middle - 1)
    }

    return helper(left, right)
}

console.log(binarySearchIterative(arr, 8) === 6)//6
console.log(binarySearchIterative(arr, 0) === 0)//0
console.log(binarySearchIterative(arr, 9) === 7 || 
    binarySearchIterative(arr, 9) === 8)//7 or 8
console.log(binarySearchIterative(arr, 1) === 1)//1
console.log(binarySearchIterative(arr, 7) === 5)//5
console.log(binarySearchIterative(arr, 4) === -1)//-1
console.log(binarySearchIterative(arr, 5) === -1)//-1
console.log(binarySearchIterative(arr, -1) === -1)//-1
console.log(binarySearchIterative(arr, 10) === -1)//-1

console.log(binarySearchRecursive(arr, 8) === 6)//6
console.log(binarySearchRecursive(arr, 0) === 0)//0
console.log(binarySearchRecursive(arr, 9) === 7 || 
    binarySearchRecursive(arr, 9) === 8)//7 or 8
console.log(binarySearchRecursive(arr, 1) === 1)//1
console.log(binarySearchRecursive(arr, 7) === 5)//5
console.log(binarySearchRecursive(arr, 4) === -1)//-1
console.log(binarySearchRecursive(arr, 5) === -1)//-1
console.log(binarySearchRecursive(arr, -1) === -1)//-1
console.log(binarySearchRecursive(arr, 10) === -1)//-1