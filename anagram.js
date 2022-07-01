// 'use strict';

const checkAnagram = (s, t) => {

    if (t.length !== s.length) {
        return false;
    }

    s = [...s].sort().join('');
    t = [...t].sort().join('');

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== t[i]) {
            return false;
        }
    }

    return true;
}

checkAnagram('anagram', "nagaram");


// RESULTS :
// Runtime: 170 ms, faster than 12.66% of JavaScript online submissions for Valid Anagram.
// Memory Usage: 47.8 MB, less than 25.80% of JavaScript online submissions for Valid Anagram.