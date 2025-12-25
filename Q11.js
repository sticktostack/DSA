// Given an integer x, return true if x is a palindrome, and false otherwise.
function palindrome(x){
    let str = x.toString()
    let reversed = str.split('').reverse().join('')
    if(reversed === str){
        return true
    }else{
        return false
    }
}