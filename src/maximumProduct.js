var maximumProduct = function(nums) {
    nums.sort((a, b) => a - b);
    let length = nums.length;
    return Math.max(nums[length -1]*nums[length -2]*nums[ length -3], nums[0]*nums[length - 1]*nums[1]);
};

// RESULTS :
// 92 / 92 test cases passed.
// Runtime: 182 ms
// Memory Usage: 46.8 MB