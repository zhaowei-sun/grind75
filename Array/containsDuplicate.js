/*

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Input: nums = [1,2,3,1]
Output: true

Input: nums = [1,2,3,4]
Output: false

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

*/

const containsDuplicate = (nums) => {
    //Approach 1 - Time: O(n) and Space: O(m)
    // const obj = {};
    // for (let i = 0; i < nums.length; i++) {
    //     obj[nums[i]] === undefined ? obj[nums[i]] = 1 : obj[nums[i]]++;
    // }
    // for (let key in obj) {
    //     if (obj[key] > 1) return true;
    // }
    // return false;

    //Approach 2 - Time: O(nlogn) and Space: O(1)
    // const sortedNums = nums.sort((a, b) => a - b);
    // for (let i = 1; i < sortedNums.length; i++) {
    //     if (nums[i] === nums[i-1]) return true;
    // }
    // return false;

    //Approach 3 - Time: O(n) and Space: O(n)
    const s = new Set(nums);
    return s.size !== nums.length
}