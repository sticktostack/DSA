// // Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// function strStr(haystack,needle){
//     for(let i=0; i<haystack.length - needle.length; i++){
//         let match = true

//         for(let j=0; j<;needle.length j++){
//             if(haystack[i+j] !== needle[j]){
//                 match = false
//                 break
//             }
//         }
//         if(match === true){
//             return i
//         }
//     }
//     return -1
// }

let str1 = "leetcode"
let str2 = "code"

for(let i=0; i<str1.length-str2.length; i++){
    let match = true
    for(let j=0; j<str2.length; j++){
        if(str1[i+j] !== str2[j]){
            match=false
        }
        }
        if(match === true){
            console.log(i)
        }
}