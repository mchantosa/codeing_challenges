/*

hackerrank.com/challenges/flatland-space-stations/problem

PROBLEM
Flatland is a country with a number of cities, some of which have space stations. 
Cities are numbered consecutively and each has a road of 1 km length connecting it to the next city. It is not a circular route, so the first city doesn't connect with the last city. Determine the maximum distance from any city to its nearest space station.

EXAMPLES
  n=3
  c=[1]

        v
  0 --- 1 --- 2

There are n=3 cities and city 1 has a space station. They occur consecutively 
along a route. City 0 is 1-0 = 1 unit away and city 2 is 2-1 = 1 units away. 
City 1 is 0 units from its nearest space station as one is located there. 
The maximum distance is 1.

CONSTRAINTS
  n is number of cities, m is number of stations
  1 <= n <= 10^5
  1 <= m <= n
  There will be at least 1 city with a space station.
  No city has more than one space station.
  c is not necessarily sorted

INPUTS/OUTPUTS
  Inputs: 
    - n, integer
    - c, []
  Ouput:
    - integer| max distance from city to nearest space station
  
DIAGRAM

n=10
c=[1, 3, 8, 9]

      v           v                             v     v
0 --- 1 --- 2 --- 3 --- 4 --- 5 --- 6 --- 7 --- 8 --- 9  
1     0    1      2
      0    1      0      1    2      3     4    5
                  0      1    2      2      1   0     1
                                                      0

PSUEDOCODE
let max = 0
sort c
itterate over c
  index x = 0:
    For index i from 0 to c[x] ->
      if distance[i],  distance[i] = min(abs(c[i]-i), distance[i])
      else distance[i] = abs(c[i]-i)
  index x:
    For index i from c[x-1] to c[x+1] -> 
      if distance[i],  distance[i] = min(abs(c[i]-i), distance[i])
      else distance[i] = abs(c[i]-i)
  index x = end:
    For index from c[end-1] to n-1 -> 
      if distance[i],  distance[i] = min(abs(c[i]-i), distance[i])
      else distance[i] = abs(c[i]-i)
return minimal element in distance

*/

function flatLandSpaceStations(n,c){
  let max = 0;
  c.sort((a,b) => a-b)
  const distances = [];
  c.forEach((element, index)=>{
    let start = (c[index-1]) ? c[index-1] : 0;
    let end = (c[index+1]) ? c[index+1] : n-1;
    for(let i = start; i <= end; i++){
      if (distances[i] !== undefined) distances[i] = Math.min(Math.abs(element-i), distances[i])
      else distances[i] = Math.abs(element-i)
    }
  })
  console.log('distances', distances)
  distances.forEach(distance => max = Math.max(max, distance))
  return max;
}

function flatLandSpaceStationsOptimized(n,c){
  /** 
  let max = 0
  sort c
  measure 1/2 distance between nodes rounded up, update max
    Math.ceil((c[i+1]-c[i] -1)/2)
    if distance is greater than max, update max
  account for non 0 station
    if c[0] !== 0, if c[0]-0 > max, replace max 
  account for non end station
    if c[end] !== length-1, if length-1-c[end] > max, replace max 
  return max
  */
  
  let max = 0;
  c.sort((a,b)=>a-b)
  for(let i = 1; i <= c.length-1; i++){
    const dist = Math.ceil(Math.abs(c[i]-c[i-1] -1)/2);
    if(dist > max) max = dist;
  }
  if(c[0] !== 0){
    const dist = Math.abs(c[0] - 0);
    if(dist > max) max = dist;
  }
  if(c[c.lengt-1] !== n-1){
    const dist = Math.abs(n-1 - c[c.length-1]);
    if(dist > max) max = dist;
  }
  return max;
}


//TESTING

//      v   v         v v
//    0-1-2-3-4-5-6-7-8-9
//    1 0 1 0 1 2 2 1 0 0
//    --> 2
console.log(flatLandSpaceStations(10, [3, 1, 8, 9]));
console.log(flatLandSpaceStations(10, [1, 3, 8, 9]) === 2);

//      v  
//    0-1-2
//    1 0 1
//    --> 1
console.log(flatLandSpaceStations(3, [1]));
console.log(flatLandSpaceStations(3, [1]) === 1);

//    v       v    
//    0-1-2-3-4
//    0 1 2 1 0 
//    --> 2
console.log(flatLandSpaceStations(5, [0,4]));
console.log(flatLandSpaceStations(5, [0,4]) === 2);



//      v   v         v v
//    0-1-2-3-4-5-6-7-8-9
//    1 0 1 0 1 2 2 1 0 0
//    -- (3-1-1)/2, (8-3-1)/2, (9-8-1)/2, (1-0)
//    --     1,           2,       0,       1 
//    --> 2
console.log(flatLandSpaceStationsOptimized(10, [3, 1, 8, 9]));
console.log(flatLandSpaceStationsOptimized(10, [1, 3, 8, 9]) === 2);

//      v  
//    0-1-2
//    1 0 1
//    -- (1-0), (2-1)
//    --   1     1
//    --> 1
console.log(flatLandSpaceStationsOptimized(3, [1]));
console.log(flatLandSpaceStationsOptimized(3, [1]) === 1);

//    v       v    
//    0-1-2-3-4
//    0 1 2 1 0 
//    -- Math.ceil((4-0-1)/2)
//    --           2    
//    --> 2
console.log(flatLandSpaceStationsOptimized(5, [0,4]));
console.log(flatLandSpaceStationsOptimized(5, [0,4]) === 2);