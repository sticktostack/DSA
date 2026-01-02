// Given an integer n, return true if it is a power of two. Otherwise, return false.
// An integer n is a power of two, if there exists an integer x such that n == 2x.

function isPowerofTwo(n){
    if(n<=0)return false
    for(let i=1; i<n; i*=2){
        if(i===n) return true
    }
    return false
}