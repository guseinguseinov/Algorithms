var invertTree = function(root) {
  if (root == null){
      return root;
  }

  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;

};


// RESULTS :
// 77 / 77 test cases passed.
// Runtime: 76 ms
// Memory Usage: 42.3 MB
