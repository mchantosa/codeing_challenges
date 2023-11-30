# Dynamic Programming

## What is dynamic programming

What are some indicators I should use dynamic Programming? Recursion, no recursion, no DP!

* **Dynamic Programing:** An optimizatrion applied to recursion.
* **Tabulation:** Bottom-up method. We start solving the problems from the base cases (bottom) and gathering answers to the top. Using a table, fill the table and then figure out the solution to the problem based on the result on the table.
* **Memoization:** Top down method. A technique for improving the performance of recursive algorithms. Recursively solve the problem, and then save off and reference subproblem solutions as you come upon them.



Optimal substructure: Optimal substructure" refers to the property that an optimal solution to the original problem can be constructed from optimal solutions of its subproblems.
        OPT(n) = f(OPT(n-1), OPT(n-2), ...)


## How to solve a dynamic programming problem

1. Come up with the recursive relationsip
    1. Draw a decision tree
        * What is the root
        * Given the root what are the children
        * What are the leaves
1. Memoization or tabulation
    * f(a, b, c) your memo would be a map
        Map(key(a, b, c), value)
        can use an array if using integers as keys
1. Tabulation
    Essentially is a form a memoization but we start from base cases moving towards the root


## What is the run time & space complexity of a memoized recursive function?
    Basic recursion: Branch ^ N
        Without recurrsion, something like fibonacci is a DFS algorithm. 
        Size fib: 2^n
    Memoized: Linear
        Number of unique nodes in the recursive tree
    Tabular: Linear
        Number of unique nodes in the recursive tree






Dynamic Programming
What are some indicators I should use dynamic Programming
Condition 1: Recursion: No recursion, no DP!
DP is an optimization applied to recursion.


Other names:
Being able to divide into subproblems: Recursion
Optimal Substructure: Recursion
OPT(n) = F (OPT(k1 <n) ,  OPT(k2 <n), …)
Fib(n) = Fib(n-1) + Fib(n-2)
Divide and conquer: Recursion 
Condition 2: Overlapping Subproblems
Recursion tree has duplicate nodes

How do I solve a dynamic programming problem?
Come up with the recursive relationship
Draw the recursion/decision tree
What is the root?
Given the root, what are the children
What are the leaves
Memoization
f(a, b, c), your memo would be map  
Map: <K:<type_a, type_b, type_c>, V: <f_outout> >
If all input parameters are the same type:
Map: <K:[ ], V: <f_outout> >
When can I use a vector instead of the map?
If the key is a non-negative integer.
Tabulation
Essentially is a form of memoization but we start from base cases and move towards the root.
Looking up into memo (called table in this case) always hits
Do we still call the function recursively?
No, because every lookup in the memo (i.e. table) is a hit!


