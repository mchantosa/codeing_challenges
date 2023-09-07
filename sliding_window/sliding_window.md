What are some indicators I should use Sliding Window?

- Contiguous subsequence of a linear data structure (array, string, linked list)
- Minimize/maximize a quantity related to the window (comparisons)
- Quadratic solution is perhaps easy but too slow; need more like a linear solution
  -- The quadratic solution has "overlapping work"
- Generally a "monotonic" condition

How do I solve a sliding window problem?

- Decide what the window state and monotonic condition are
- Instantiate the template
- Add the answer capture/return code


Write a template for the sliding window technique:

sliding_window(input sequence)
  initialize state related to window
  initialize left to 0

  for r in range 0 to length of input

    update window state for expansion
    while monotonic condition is not met
      update window state for contraction
      increment left

NOTE: typically going to need additional code to capture/return the answer

What is the runtime & space complexity of a sliding window algorithm?

Time: O(N)
Space: varies, but generally O(1)













## TEMPLATE 
```javascript
// Sliding Window TEMPLATE

function sliding_window(str){
  //  Define state variables
    //  window state: set, [], {}, ... 
    let l= 0  //r(in initialized loop)

  for(let r = 0; r<str.length; r++){
    // Hunting logic goes here

    //Catch-Up
    while (/*catch-up conditional goes here*/){
      //  catch-up logic goes here
      l += 1;
    }     
  }

  return //ans
}

```
