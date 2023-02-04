/*

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Input: nums = [3,2,3]
Output: 3

Input: nums = [2,2,1,1,1,2,2]
Output: 2

*/

var majorityElement = function(nums) {
    //Approach 1
    //TIME: O(N)
    //SPACE: O(M)
    // const obj = {};
    // for (let i = 0; i < nums.length; i++) {
    //     if (obj[nums[i]]) obj[nums[i]]++;
    //     else obj[nums[i]] = 1;
    // }
    // let maxFreq = 0, maxNum;
    // for (let key in obj) {
    //     if (obj[key] > maxFreq) {
    //         maxNum = key;
    //         maxFreq = obj[key];
    //     }
    // }
    // return maxNum;

    //Approach 2
    //TIME: O(NLogN)
    //SPACE: O(1)
    const sortedNums = nums.sort((a, b) => a - b);
    return sortedNums[Math.floor(sortedNums.length / 2)];

};