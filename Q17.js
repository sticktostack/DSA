// Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

// using BUILT-IN methods 
function lowerCase(s){
    let res =""
    for(let i=0; i<s.length; i++){
        res += s[i].toLowerCase()
    }
    return res
}
lowerCase("HEELO")

// using ASCII values or Charector Codes 
function upperTolower(s){
    let res = ""
    for(let i=0; i<s.length; i++){
        let code =s.charCodeAt(i)
        if(code >= 65 && code <= 90){
            res += String.fromCharCode(code + 32)
        }else{
            res += s[i]
        }
    }
    return res
}