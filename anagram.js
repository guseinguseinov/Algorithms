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
// 36 / 36 test cases passed.
// Runtime: 170 ms
// Memory Usage: 47.8 MB