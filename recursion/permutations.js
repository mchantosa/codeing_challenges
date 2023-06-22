/**
 *              ''
 *      'a' 'b' 'c' 'd' 'e'
 *  'a' 'b' 'c' 'd' 'e','a' 'b' 'c' 'd' 'e','a' 'b' 'c' 'd' 'e'
 * if length = n, count+=1
 */

/**
 * returnCount = 0
 *
 * helper = (str){
 *  base cases
 *      if str.length === n, returnCount += 1
 *  recursive cases
 *      if(str[str.length-1] === a)helper(str+e)
 *      if(str[str.length-1] === e)helper(str+a)(atr+i)
 *      if(str[str.length-1] === i)helper(str+a)(str+e)(str+o)(str+u)
 *      if(str[str.length-1] === 0)helper(str+i)(str+u)
 *      if(str[str.length-1] === a)helper(str+a)
 *
 * }
 *
 * helper('')
 *
 * return returnCount%(10**9+7)
 *
 *
 */

// const memo = new Map();
//   let memoKey = `${len}-${lastIn}`
//       if(memo.has(memoKey)){
//           return memo.get(memoKey)
//       }

function countPerms(n) {
  let returnCount = 0;

  //console.log(n)

  const helper = (len, lastIn) => {
    //base cases
    if (len === n) {
      returnCount += 1;
      return;
    }

    //recursive cases
    if (lastIn === "a") helper(len + 1, "e");
    else if (lastIn === "e") {
      helper(len + 1, "a");
      helper(len + 1, "i");
    } else if (lastIn === "i") {
      helper(len + 1, "a");
      helper(len + 1, "e");
      helper(len + 1, "o");
      helper(len + 1, "u");
    } else if (lastIn === "o") {
      helper(len + 1, "i");
      helper(len + 1, "u");
    } else if (lastIn === "u") helper(len + 1, "a");
  };

  if (n > 0) {
    helper(1, "a");
    helper(1, "e");
    helper(1, "i");
    helper(1, "o");
    helper(1, "u");
  }

  //console.log(returnCount)
  return returnCount % (10 ** 9 + 7);
}
