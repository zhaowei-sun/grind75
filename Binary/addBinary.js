/*

Given two binary strings a and b, return their sum as a binary string.

Input: a = "11", b = "1"
Output: "100"

Input: a = "1010", b = "1011"
Output: "10101"

*/

const addBinary = function(a, b) {
    let num1 = 0, num2 = 0;
    for (let i = 0; i < a.length; i++) {
        num1 += Number(a[i]) * (2 ** (a.length - 1 - i));
    }
    for (let j = 0; j < b.length; j++) {
        num2 += Number(b[j]) * (2 ** (b.length - 1 - i));
    }
    const num = num1 + num2;
    let result = '', curr = num;
    while (curr >= 2) {
        result += String(curr % 2);
        curr = Math.floor(curr / 2);
    }
    result += String(curr);
    return result;
};

