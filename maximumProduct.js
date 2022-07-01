'use strict';

var maximumProduct = function(nums) {
    nums.sort((a, b) => Math.abs(b) - Math.abs(a));
   
    let prod = 1;
    for (let i = 0; i < 3; i++) {
        prod*= nums[i];
    }
    console.log(nums);
    console.log(prod);
    // return prod;
};

maximumProduct([1,2,3,4]); // 24
maximumProduct([-1, -2, -3]);  // -6
maximumProduct([-100,-98,-1,2,3,4]); //39200
maximumProduct([-100,-2,-3,1]); // 300