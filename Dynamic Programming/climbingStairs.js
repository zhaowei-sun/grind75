/*

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

*/

const climbStairs = (n, memo={}) => {
    //RECURSIVE
    // //base case
    // if (n <= 1) return 1;
    // //check memo
    // let oneStairDown, twoStairsDown
    // if (memo[n-1] !== undefined) oneStairDown = memo[n-1];
    // else {
    //     memo[n-1] = climbStairs(n-1, memo);
    //     oneStairDown = memo[n-1]
    // };

    // if (memo[n-2] !== undefined) twoStairsDown = memo[n-2];
    // else {
    //     memo[n-2] = climbStairs(n-2, memo);
    //     twoStairsDown = memo[n-2]
    // };
    // //recursive call
    // return oneStairDown + twoStairsDown;

    //ITERATIVE
    const arr = [];
    arr[1] = 1;
    arr[2] = 2;
    for(let i = 3; i <= n; i++){
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[n];
};