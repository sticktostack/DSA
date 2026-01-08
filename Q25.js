// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t

var isIsomorphic = function(s, t) {
   if (s.length !== t.length) return false;

    for (let i = 0; i < s.length; i++) {
        // check first occurrence positions
        if (s.indexOf(s[i]) !== t.indexOf(t[i])) {
            return false;
        }
    }
    return true; 
};