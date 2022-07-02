var mySqrt = function(x) {
    let left = 1;
    let right = x;

    while (left <= right) {
        let mid = (right + left)/2;
        if (mid*mid == x || Math.floor(mid)**2 == x) {
            return Math.floor(mid);
        }
        else if (mid*mid > x) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    // console.log(left - 1 )
    return Math.round(left - 1);
    // return Math.floor(Math.sqrt(x));  <== this is also accepted
};

let r1 = mySqrt(4);
let r2 = mySqrt(8);
let r3 = mySqrt(9);
let r4 = mySqrt(25);
console.log(r1, r2, r3, r4);