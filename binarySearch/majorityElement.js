//https://www.geeksforgeeks.org/check-for-majority-element-in-a-sorted-array/


var majorityElement = function(nums, target) {
    /**
    
        PRECONDITIONS
        if odd
            is middle number target, if not, return false
        if even
            are middle two numbers target, if not, return false
        
        FIND START
        len = arr.length
        start= 0
        end = Math.ceil(len/2)
        
        while(start <= end)
           mid = Math.floor(end+start)/2

           if(letters[mid]===target){
               end = mid-1
           }
           else{
               start = mid
           }


        

        DETERMINE IF TARGET IS MAJORITY
        if(arr[start+Math.floor(len/2)+1] === target) return true
     */
    }