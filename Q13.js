// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

var reverseWords = function(s) {
  rev = s.split(" ").reverse()
  let result = ""
  for(let i=0; i<rev.length; i++){
    result += rev[i].split("").reverse().join("")
}  return result
};