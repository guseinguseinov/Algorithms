var mySqrt = function(x) {
    let left = 1;
    let right = x;

    while (left <= right) {
        let mid = left + (right - left)/2;

        if (mid*mid === x) {
            return mid;
        }
        else if (mid*mid > x) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }


    // return Math.floor(Math.sqrt(x));  <== this is also accepted
};