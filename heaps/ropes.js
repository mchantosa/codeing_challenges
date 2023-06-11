/**
 * [4, 3, 2, 6]->29

[8, 2, 5, 1, 9]->52
[1+2] -> 3
[3+5] -> 8
[8+8] -> 16
[9+16]-> 25
3+8+16+25 = 52

build heap: NlogN, n-1 logn operations
set cost = 0
while length heap >=1
  let small1 = Pop
  let small2 = Pop
  cost = small1 + small2
  insert into heap
return cost 
 * 
 */
