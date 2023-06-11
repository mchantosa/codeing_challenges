[
  [1, 10, 11, 15]
  [2, 4, 9, 14]
  [5, 6, 8, 16]
  [3, 7, 12, 13]
] --> [1...16]

Naive: dump everything into an array and sort it Object(NKlog(nk))

Object(NKlog(k)):
Less Naive: build a heap of size k 
each eleemnt is the first value of every aray [1, 2, 5, 3]
iterate (lengthNK)
- opo the smallest value from my heap
- add the next element from the list where the value came from

[1, 2, 5, 3]
-->
[10, 4, 5, 3]
[1, 2, 3]
...