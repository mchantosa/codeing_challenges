/** 

https://leetcode.com/problems/shortest-completing-word/

PROBLEM
Given a string licensePlate and an array of strings words, find the shortest completing word in words.

A completing word is a word that contains all the letters in licensePlate. Ignore numbers and spaces in licensePlate, and treat letters as case insensitive. If a letter appears more than once in licensePlate, then it must appear in the word the same number of times or more.

For example, if licensePlate = "aBc 12c", then it contains letters 'a', 'b' (ignoring case), and 'c' twice. Possible completing words are "abccdef", "caaacab", and "cbca".

Return the shortest completing word in words. It is guaranteed an answer exists. If there are multiple shortest completing words, return the first one that occurs in words.


INPUT/OUTPUT:
  Input
    - licensePlate: string
    - words: array of strings
  Output
    - string: first shortest word from words containing all letters (case insensitive from input)

EXAMPLES:
  Example1
    Input: licensePlate = "1s3 PSt", words = ["step","steps","stripe","stepple"]
    Output: "steps"
  Example2
    Input: licensePlate = "1s3 456", words = ["looks","pest","stew","show"]
    Output: "pest"

DIAGRAM

  Start with plate
    "1s3 PSt"
  Convert to map
    "1s3 PSt"==>{s:2, p:1, t:1}
  Start with words
    ["step","steps","stripe","stepple"]
  Presort words by length: in this case it is presorted
    ["step","steps","stripe","stepple"]
  Compare iteratively along words, return first word that contains all letters
    "step" is the first and shortest word

  Start with plate
    "1s3 456"
  Convert to map
    {s:1}
  Start with words
    ["looks","pest","stew","show"]
  Presort words by length: 
    ["looks","pest","stew","show"]  --> ["pest","stew","show", "looks"]
  compare iteratively along words, return first word that contains all letters
    "pest" is the first word containing all letters


PSUEDOCODE
  0. create hash function
    hash (word)-> word
                  .toLowerCase
                  .split
                  .forEach{letter => if a-z, hash}
    
  1. create word licensePlateMap  O(l)|l=7
    licenseMap = hash(licensePlate)

  2. sort words by length,preserve order otherwise  O(nlogn) | n<= 1000
    words.sort{a,b =>
      sort by length
    }

  3. loop over words and do a letter count comparison   O((l+w)*n) 
    letters = licenseMap.keys
    for(let i= 0; i < words.length; i++){            O(n)|n=1000
      -set up trigger
        contained = true; 
      -hash word
        wordMap = hash(word)                         O(w)|w=15
      -trip trigger
        letters.forEach{letter =>                    O(l)|l=
          if (!wordMap[letter] ||(licenseMap[letter] > wordMap[letter])), contained = false
        }
      -return if trigger is tripped
        if contained = true, break loop and return word 
    }
*/

const hash = (word) => {
  const map = {};
  if (typeof word !== 'string') {
    console.log('invalid word, cannnot hash: ', word)
    return -1;
  }
  const regex = /[a-z]/;
  word.toLowerCase().split('').forEach(letter => {
    if(!regex.test(letter)) return
    else if(map[letter]) map[letter]++
    else map[letter] = 1
  })
  return map
}

function shortestCompletingWord(licensePlate, words){
 
  const licenseMap = hash(licensePlate)
  const letters = Object.keys(licenseMap)
  
  words.sort((a,b) => {
    if (a.length < b.length) return -1
    if (a.length === b.length) return 0
    if (a.length > b. length) return 1
  })

  for(let i = 0; i < words.length; i++){
    const word = words[i];
    let contains = true;
    const wordMap = hash(word);
    letters.forEach(letter => {
      if(!wordMap[letter]) contains = false;
      else if( licenseMap[letter] > wordMap[letter]) contains = false;
    })
    if(contains === true) return word;
  }
  return -1
}    //25% complexity and space for JavaScript, room for improvement

function shortestCompletingWordOptomized(licensePlate, words){
  /** 
  - hash letters (licenseMap)
  - let returnWord
  - for each word, itterate over letters
    - if !returnWord
      - if (word contains all letters) returnWord = word
    - else
      - if word.length >= returnWord.length, continue
      - else (word contains all letters), returnWord = word

  Does word contain all letters  
    letters
    (word)->T/F
      match = true
      for(letter of letters)(letter=>{
        define regex from letter
        if(word.regex.length < licenseMap[letter])return false
      })
    return true
    
  */
  const licenseMap = hash(licensePlate)
  const letters = Object.keys(licenseMap)
  
  const containsLetters = (word) => {
    for(let letter of letters){
      const regex = new RegExp(letter, 'g')
      const match = word.match(regex);
      if(!match) return false
      if(match.length<licenseMap[letter]) return false
    }
    return true;
  }
  
  let returnWord;
  words.forEach(word =>{
    if(!returnWord){
      if(containsLetters(word)) returnWord = word;
    } else {
      if (word.length >= returnWord.length) return
      else {
         if(containsLetters(word)) returnWord = word;
      }
    }
  })
  
  return returnWord;
}  //beats 95% complexity and 80% space for JavaScript

//TESTING
console.log(shortestCompletingWordOptomized( 
  "1s3 PSt", 
  ["step","steps","stripe","stepple"]
))

console.log(shortestCompletingWordOptomized( 
  "1s3 PSt", 
  ["step","steps","stripe","stepple"]
) === "steps")

console.log(shortestCompletingWordOptomized(
  "1s3 456", 
  ["looks","pest","stew","show"]
))

console.log(shortestCompletingWordOptomized(
  "1s3 456", 
  ["looks","pest","stew","show"]
) === "pest")

console.log(shortestCompletingWordOptomized(
  "Ah71752", 
  ["suggest","letter","of","husband","easy","education","drug","prevent","writer","old"]
))

console.log(shortestCompletingWordOptomized(
  "Ah71752", 
  ["suggest","letter","of","husband","easy","education","drug","prevent","writer","old"]
) === "husband")


module.exports.shortestCompletingWord = shortestCompletingWord;