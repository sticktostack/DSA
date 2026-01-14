// Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.

// The words in paragraph are case-insensitive and the answer should be returned in lowercase.

var mostCommonWord = function(paragraph, banned) {
    paragraph = paragraph.toLowerCase().replace(/[^a-z ]/g, " ")
    let words = paragraph.split(" ")
let count = {}
let max = 0
    let ans = ""

    for (let i = 0; i < words.length; i++) {
    let word = words[i]
    if (word === "") continue;
        if (banned.includes(word)) continue;
    count[word] = (count[word] || 0) + 1

    if (count[word] > max) {
            max = count[word]
            ans = word
     }
}
    return ans
};