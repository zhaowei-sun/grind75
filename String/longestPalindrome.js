/*

Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.

*/

const longestPalindrome = function(s) {
    const obj = {};

    for (let i = 0; i < s.length; i++) {
        if (!obj[s[i]]) obj[s[i]] = 1;
        else obj[s[i]]++;
    }

    let longestLength = 0, singleExists = false;

    for (const key in obj) {
        if (obj[key] % 2 === 0) longestLength += obj[key];
        if (obj[key] % 2 === 1) {
            longestLength += (obj[key] - 1);
            singleExists = true;
        }
    }

    if (singleExists) longestLength += 1;

    return longestLength;

    //Approach using set
    
    // const set = new Set();
    // let count = 0;
    
    // for (const char of s) {
    //     if (set.has(char)) {
	// 		count += 2;
    //         set.delete(char);
    //     } 
	// 	else {
    //         set.add(char);
    //     }
    // }

    // return count + (set.size > 0 ? 1 : 0);
};