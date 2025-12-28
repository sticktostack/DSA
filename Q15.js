// Write a function that reverses a string. The input string is given as an array of characters
let s = ["h","e","l","l","o"]
let right = s.length-1
for(let left=0; left<right; left++ , right--){
   [s[left],s[right]] = [s[right],s[left]]
}