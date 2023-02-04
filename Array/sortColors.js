const switchEl = (i, j, array) => {
    [array[i], array[j]] = [array[j], array[i]]
};

const sortColors = () => {
    //O(n^2) Insertion Sort
    for (let i = 1; i < nums.length; i++){
        let curr = i;
        while (curr > 0 && nums[curr] < nums[curr-1]) {
            switchEl(curr, curr-1, nums);
            curr--;
        }
    }
    return nums;

    //O(n) LeetCode Solution
    // let n  = nums.length, zero = one = two = temp = 0;
    // for(let i = 0; i<n; i++){
    //     if(nums[i]==0)zero++
    //     if(nums[i]==1)one++
    //     if(nums[i]==2)two++
    // }
    // while(zero-->0)nums[temp++]=0;
    // while(one-->0)nums[temp++]=1;
    // while(two-->0)nums[temp++]=2;
    // return nums
}