/*

Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the 
frequency of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]

Input: candidates = [2], target = 1
Output: []

*/

const combinationSum = (candidates, target) => {
    //declare a combinations array
    const combinations = [];
    //declare a helper function that will run recursively
    //it accepts the candidates, a target, and the result array
    const helper = (candidates, target, result=[]) => {
        //base case:
        //if the array is empty, return
        if (candidates.length === 0) return;
        //if target is negative, return
        if (target < 0) return;
        //if target is 0, push the result arr to combinations
        if (target === 0) {
            combinations.push(result);
            return;
        }
        //recursive case:
        //for each candidate, invoke the function recursively
        for (let i = 0; i < candidates.length; i++) {
            //the target is target minus current candidate
            //the candidates is the same
            //the result array is the same as before with curr el added
            let currEl = candidates[i];
            if (i === 0) {
                helper(candidates, target - currEl, result.concat([currEl]));
            } 
            else {
                // console.log(currEl, candidates, target, result.concat([currEl]))
                helper(candidates.slice(1), target - currEl, result.concat([currEl]));
            }
        }
    }
    helper(candidates, target);
    //return combinations array
    return combinations;
};

const nums = [2,3,5];
console.log(combinationSum(nums, 8));

