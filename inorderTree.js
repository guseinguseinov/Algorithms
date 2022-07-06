if (root == null) {
    return [];
}

let stack = [];
let arr = [];
let cur = root;
while(cur != null || stack.length) {
    while(cur != null) {
        stack.push(cur);
        cur = cur.left;
    }
    cur = stack.pop();
    arr.push(cur.val);
    cur = cur.right;
}

return arr;

// RESULTS :
// 70 / 70 test cases passed.
// Runtime: 90 ms
// Memory Usage: 42.4 MB