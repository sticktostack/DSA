// Q : Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

// A shift on s consists of moving the leftmost character of s to the rightmost position

var rotateString = function(s, goal) {
    if (s.length !== goal.length) return false;

    for (let i = 0; i < s.length; i++) {
        if (s === goal) return true;
        s = s.slice(1) + s[0];
    }
    return false;
};