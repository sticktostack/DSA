// Given a 32-bit integer num, return a string representing its hexadecimal representation. For negative integers, two’s complement method is used.
// All the letters in the answer string should be lowercase characters, and there should not be any leading zeros in the answer except for the zero itself.
// Note: You are not allowed to use any built-in library method to directly solve this problem

var toHex = function(num) {
    if (num === 0) return "0";
    if (num < 0) {
        num = num + 2 ** 32;
    }
    let hexNum = "";
    let chars = "0123456789abcdef";
    while (num > 0) {
        let remainder = num % 16;
        hexNum = chars[remainder] + hexNum;
        num = Math.floor(num / 16);
    }
    return hexNum;
};