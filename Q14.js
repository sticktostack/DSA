// Given a string s consisting of words and spaces, return the length of the last word in the string

// const { log } = require("node:console");
// const { console } = require("node:inspector");

// let s = "   fly me   to   the moon  "
// let lastword = s.trim().split(/\s+/)

var lengthOfLastWord = function(s) {
let wordArray = s.trim().split(/\s+/)
let wordLength;
for(let i=0; i<wordArray.length; i++){
    if(i === wordArray.length - 1){
        wordLength = wordArray[i].length
    }
} return wordLength
    }; 