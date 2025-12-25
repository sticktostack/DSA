//Q.2 Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// case 1 ==> strs = ["flower", "flow", "float"];
// case 2 ==> strs = ["dog","racecar","car"]
// case 3 ==> strs = ["flower","flow","flight"]

function longestPrefix(strs) {
  let prefix = "";
  for (let i = 0; i < strs[0].length; i++) {
    let prefixChar = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      const word = strs[j];
      // console.log(word[i])
      if (i >= word.length) return prefix;
      // returning empty string as said in the question
      if (word[i] !== prefixChar) return prefix;
    }
    prefix += prefixChar;
  }
  return prefix
}
console.log(longestPrefix(["dog","racecar","car"]))
