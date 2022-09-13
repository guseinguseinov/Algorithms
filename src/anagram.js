const checkAnagram = (s, t) => {
    if (t.length !== s.length) {
        return false;
    }

    s = [...s].sort().join('');
    t = [...t].sort().join('');

    if (s === t) return true;
    
    return false;
}

checkAnagram('anagram', "nagaram");


// RESULTS :
// 36 / 36 test cases passed.
// Runtime: 131 ms
// Memory Usage: 48.1 MB