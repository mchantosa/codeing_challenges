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
