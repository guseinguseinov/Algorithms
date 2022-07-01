var guessNumber = function(n) {
    let left = 1;
    let right = n;

    while (left <= right) {
        let m = Math.floor((right + left)/2);
        if (guess(m) === 0) {
            return m;
        } 
        else if (guess(m) === 1) {
            left = m + 1;
        }
        else {
            right = m - 1;
        }
    }
};


// RESULTS :
// 25 / 25 test cases passed.
// Runtime: 87 ms
// Memory Usage: 41.8 MB

