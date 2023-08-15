/**
 * link: https://codeforces.com/gym/100109/attachments/download/1283/20122013-acmicpc-neerc-southern-subregional-contest-en.pdf
 *
 * want to marry the last princess, don't like the first princess
 * input: [d, 10
 * d, 12
 * p, 2
 * d, 1
 * p, 2]
 *
 * output: (max gold 13, dragons killed 2, which dragons[1, 3])
 *
 * [d 10
 * d 12
 * p 2
 * d 1
 * p 3]
 * output: -1 can't do it, no way to marry the third princess
 *
 * O(NlogN), you do a logN at every step
 * greedy pick as many dragons as you can,
 *  when you get to a princess with t, remove all the cheapest dragons so you are at t-1 most expensive dragons
 * when you get to the princess you want to marry
 *  remove all the cheap dragons to reduce you to her t
 */
