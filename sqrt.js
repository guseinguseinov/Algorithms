var mySqrt = function(x) {
    for (let count = 0; true; count++) {
        if (count*count > x) {
            return count - 1;
        }
    }
};

// RESULT :
// 1017 / 1017 test cases passed.
// Runtime: 114 ms
// Memory Usage: 42.6 MB