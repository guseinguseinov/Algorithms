var isValid = function(s) {
    let list = [];

    for (let i = 0; i < s.length; i++) {
      if ((s[i] === '(') || (s[i] === '[') || (s[i] === '{')) {
        list.push(s[i]);
      }
      else if (list.length !== 0) {
        if ((list[list.length - 1] === '(') && (s[i] === ')')) {
          list.pop()
        }
        else if ((list[list.length - 1] === '[') && (s[i] === ']')) {
          list.pop()
        }
        else if ((list[list.length - 1] === '{') && (s[i] === '}')) {
          list.pop()
        }else {
          return false;
        }
      }
      else {
        return false;
      }
    }

    if (list.length !== 0) {
      return false;
    }
    else {
      return true;
    }

};

// RESULTS :
// 92 / 92 test cases passed.
// Runtime: 134 ms
// Memory Usage: 42.2 MB
