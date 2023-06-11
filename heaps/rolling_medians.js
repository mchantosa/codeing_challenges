/**
 *
 * At every step
 *  1) insert an element
 *  2) tell median of the array so far
 *        median odd[1, 2, 3, 4, 5] median -> 3
 *        median even [2, 3, 4, 6] median -> 3+4/2
 *  3) delete an element
 *
 * Naive alg: when median requested, sort and return median N^2LogN
 *
 *
 * NLogN
 * What if you have 2 heaps, a min heap and a max heap
 * [max heap ||| min heap]
 *  max heap length = min heap length -> (max + min)/2
 *  max heap length = 1+ size min_heap -> max of maxHeap
 *
 * [5, 2, 1, 7, 3, 6, 4, 8]
 * - max heap [5], min heap [] med = 5
 * - max heap [2], min heap [5] med = (5+2)/3
 * - max heap [2, 1], min heap [5] med = 2
 * - max heap [2, 1], min heap [5, 7] = (5+2)/2
 * - max heap [3, 2, 1], min heap [5, 7] = (5+3)/2
 *
 * Can implement delete with a balanced binary search tree, heap can't handle deletes
 *
 *
 */
