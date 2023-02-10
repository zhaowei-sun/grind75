/*

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

*/

const productExceptSelf = (nums) => {

    const result = [];

    let productSoFar = 1;
    
    //the product from the left side of the el
    for (let i = 0; i < nums.length; i++) {
        result[i] = productSoFar
        productSoFar *= nums[i];
    }

    productSoFar = 1;

    //the product from the right side of the el
    for (let j = nums.length - 1; j >= 0; j--) {
        result[j] *= productSoFar
        productSoFar *= nums[j];
    }
    
    return result;

};