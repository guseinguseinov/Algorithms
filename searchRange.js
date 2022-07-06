// First and Last Position of Element 

var searchRange = function(nums, target) {

    let start = 0;
    let end = 0;
    if (nums.indexOf(target) === -1) {
        return [-1, -1];
    }
    else {
        start = nums.indexOf(target);
        let count = nums.filter(x => x == target).length;
        end = start + count - 1;
    } 
    return [start, end];
};

// RESULTS :
// 88 / 88 test cases passed.
// Runtime: 106 ms
// Memory Usage: 42.7 MB