// Every valid email consists of a local name and a domain name, separated by the '@' sign. Besides lowercase letters, the email may contain one or more '.' or '+'.

// For example, in "alice@leetcode.com", "alice" is the local name, and "leetcode.com" is the domain name

var numUniqueEmails = function(emails) {
   let unique = []
    for (let e = 0; e < emails.length; e++) {
    let email = emails[e]
    let local = ""
    let domain = ""
        let ignore = false
        for (let i = 0; i < email.length; i++) {
            if (email[i] === '@') {
                domain = email.slice(i);
                break
            }
    if (ignore) continue;
            if (email[i] === '+') {
                ignore = true
            } 
            else if (email[i] !== '.') {
                local += email[i]
            }
        }
        let finalEmail = local + domain;
        let found = false;
        for (let j = 0; j < unique.length; j++) {
            if (unique[j] === finalEmail) {
                found = true;
                break;
            }
        }
        if (!found) {
            unique.push(finalEmail);
        }
    }
    return unique.length; 
};