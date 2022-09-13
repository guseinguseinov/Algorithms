var containsDuplicate = function(nums) {
    let uniqueArr = [...new Set(nums)];
    if (nums.length === uniqueArr.length) {
        return false;
    } else {
        return true;
    }
};


// RESULTS : 
// 70 / 70 test cases passed.
// Runtime: 90 ms
// Memory Usage: 51 MB