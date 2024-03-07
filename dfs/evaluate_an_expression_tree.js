/*
Evaluate an Expression Tree

Given the root of a binary tree with interior nodes + or – and leaves that are numbers, compute the value of the expression represented by the tree. Assume nodes have value, left, and right as properties.

Input: 
                      +
             -	                  +
        -         +            5      6
     1    2     3    4
     
Output: 3  = (1-2) – (3+4) + (5+6) = -1 – 7 + 11


time (N)
space : h

let returnVal = 0;
helper
    base
        if leaf is int
            if node === -, returnVal + left - right
            else returnVal + left + right
    recursive 
        if(left) helper(left)
        if(right) helper(right)
*/