/**
 *  PROBLEM: Network Time Delay
 * 
 *  LINK: https://leetcode.com/problems/network-delay-time/description/
 * 
 *  DESCRIPTION: 
 *      You are given a network of n nodes, labeled from 1 to n. 
 *      You are also given times, a list of travel times as directed 
 *      edges times[i] = (ui, vi, wi), where ui is the source node, 
 *      vi is the target node, and wi is the time it takes for a signal 
 *      to travel from source to target.
 * 
 *      We will send a signal from a given node k. Return the minimum 
 *      time it takes for all the n nodes to receive the signal. If it 
 *      is impossible for all the n nodes to receive the signal, return -1.
 * 
 *  EXAMPLES: 
 *      Example 1:
                1       1       1
            1  <--  2  -->  3  -->  4

                    2
                  1/  \1
                1        3
                          \1
                            4
            Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
            Output: 2
        Example 2:
            Input: times = [[1,2,1]], n = 2, k = 1
            Output: 1
        Example 3:
            Input: times = [[1,2,1]], n = 2, k = 2
            Output: -1

    CONSTRAINTS:
        1 <= k <= n <= 100
        1 <= times.length <= 6000
        times[i].length == 3
        1 <= ui, vi <= n
        ui != vi
        0 <= wi <= 100
        All the pairs (ui, vi) are unique. (i.e., no multiple edges.)

    ANALYSIS:
        A graph is just a directional tree that cycles
        k is the root
        Traverse tree with DFS
            Aggregate latency values
            Track visited nodes
            if all nodes visited
                return the the maximum latency
                Notes: in example one if 2 pointed directly to 4, 
                    you need to pick the minimum value to store in 
                    the map, then return the maximum map value
            else
                return -1

    PSEUDOCODE:
        startNode = k
        map = Map [end, latency]
        helper(node, aggregateLatency)
          base
            update map(node)
              newValue = add node latency to aggregate Latency and update map
              if falsy 
                add newValue
              else if (newValue < existing value) replace map value with newValue  
          recursive
            ...
            if child node has not been visited continue for child node
        return helper(2, 0) 
 */

console.log(networkDelayTime([[2,1,1],[2,3,1],[3,4,1]], 4, 2) === 2)//2
console.log(networkDelayTime([[1,2,1]], 2, 1) === 1)//1
console.log(networkDelayTime([[1,2,1]], 2, 2) === -1)//-1
console.log(networkDelayTime(
    [
        [3,5,78],[2,1,1],[1,3,0],[4,3,59],[5,3,85],
        [5,2,22],[2,4,23],[1,4,43],[4,5,75],[5,1,15],
        [1,5,91],[4,1,16],[3,2,98],[3,4,22],[5,4,31],
        [1,2,0],[2,5,4],[4,2,51],[3,1,36],[2,3,59]
        /**
            3 => [ [ 5, 78 ], [ 2, 98 ], [ 4, 22 ], [ 1, 36 ] ],
            2 => [ [ 1, 1 ], [ 4, 23 ], [ 5, 4 ], [ 3, 59 ] ],
            1 => [ [ 3, 0 ], [ 4, 43 ], [ 5, 91 ], [ 2, 0 ] ],
            4 => [ [ 3, 59 ], [ 5, 75 ], [ 1, 16 ], [ 2, 51 ] ],
            5 => [ [ 3, 85 ], [ 2, 22 ], [ 1, 15 ], [ 4, 31 ] ]
         */
        /**
         *  5 -> 1: 15
         *  5 -> 2: 1(15) + 2(0) = 15
         *  5 -> 3: 1(15) + 3(0) = 15
         *  5 -> 4: 
         *      [54, 514, 524, 534, 5124, 5134, 5234, 51234]
         *      - [54]: 4(31)
         *      - [514]: 1(15) + 4(43)
         *      - [524]: 2(22) + 4(23)
         *      - [523]2(22) + 3(59) + 4(22)
         *      
         */
    ], 
    5, 
    5))//31

function networkDelayTime(times, n, k) {

    const nodeMap = new Map()
    times.forEach(element => {//map graph {node, [node, weight]}
        if(nodeMap.has(element[0])) {
            nodeMap.get(element[0]).push([element[1], element[2]])
        } else {
            nodeMap.set(element[0], [[element[1], element[2]]])
        }
    });

    /**
     * Update shortest paths from node
     * Find shortest route
     * Add to visited
     * 
     */

    const visited = new Set()
    visited.add(k)
    
    const delayMap = new Map()
    delayMap.set(k, 0)
    nodeMap.forEach(node=>{
        if(node !== k)delayMap.set(node, Infinity)
    })

    const queue = [...delayMap.keys()]

    
    
}

function networkDelayTimeDFS(times, n, k) {
    //Works, but too slow
    const nodeMap = new Map()

    times.forEach(element => {//map graph {node, [node, weight]}
        if(nodeMap.has(element[0])) {
            nodeMap.get(element[0]).push([element[1], element[2]])
        } else {
            nodeMap.set(element[0], [[element[1], element[2]]])
        }
    });

    const delayMap = new Map()
    const visited = new Set()
    visited.add(k)

    const traverse = (node, aggregateDelay) => {
        //update delayMap
        aggregateDelay += node[1]
        if(delayMap.has(node[0])) {
            delayMap.set(
                node[0], 
                Math.min(aggregateDelay, delayMap.get(node[0]))
            )
        } else {
            delayMap.set(node[0], aggregateDelay)
        }
        //recurse through directional nodes
        if(nodeMap.get(node[0])){
            nodeMap.get(node[0]).forEach(node=>{
                if(!visited.has(node[0])){
                    visited.add(node[0])
                    traverse(node, aggregateDelay)
                    visited.delete(node[0])
                }
            })
        }
    }

    traverse([k, 0], 0)
    if([...delayMap].length < n) {
        return -1
    } else {
        return Math.max(...delayMap.values())
    }
}