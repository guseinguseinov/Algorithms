// Evaluate Reverse Polish Notation

var evalRPN = function(tokens) {
    let arr = [];
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] == "+") {
          let newItem = arr[arr.length - 1] + arr[arr.length - 2];
          arr.pop();
          arr.pop();
          arr.push(newItem);
        }
        else if (tokens[i] == "-") {
          let newItem =  arr[arr.length - 2] - arr[arr.length - 1];
          arr.pop();
          arr.pop();
          arr.push(newItem);
        }
        else if (tokens[i] == "*") {
          let newItem = arr[arr.length - 1] * arr[arr.length - 2];
          arr.pop();
          arr.pop();
          arr.push(newItem);
        }
        else if (tokens[i] == "/") {
          let newItem = parseInt(arr[arr.length - 2]/arr[arr.length - 1]);
          arr.pop();
          arr.pop();
          arr.push(Number(newItem));
        }
        else {
          arr.push(Number(tokens[i]));
        }
    }
    return arr[0];
};

// RESULTS :
// 20 / 20 test cases passed.
// Runtime: 98 ms
// Memory Usage: 44.6 MB
