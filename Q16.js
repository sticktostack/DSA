// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1

function unique(s){
    const map = new Map()

    for(let i=0; i<s.length; i++){
        map.set(s[i], (map.get(s[i]) || 0)+1)
    }
    for(let j=0; j<s.length; j++){
        if(map.get(s[j]) === 1){
            return j
        }
    }
    return -1
}