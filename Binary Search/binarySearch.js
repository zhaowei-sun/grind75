/*

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1

*/

const search = (nums, target) => {
    //initialize start and end
    let start = 0, end = nums.length - 1, mid;
    
    //cover the two head and tail end cases
    if (nums[start] === target) return start;
    if (nums[end] === target) return end;

    //start a while loop - while start smaller than end
    while (start < end - 1) {
        //define mid point
        mid = Math.floor((start + end) / 2)
        //if the el at index mid is target - return mid
        if (nums[mid] === target) return mid;
        //if the el at index mid larger than target
        //update end to be mid
        else if (nums[mid] > target) end = mid;
        //if the el at index mid smaller than target
        //update start to be mid
        else if (nums[mid] < target) start = mid;
    }

    //if there's no match
    return -1;
};