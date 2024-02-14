const arr = [0,  1,  3,  3,  3,  7,  8,  9,  9]

const binarySearchIterative = (arr, n) => {
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