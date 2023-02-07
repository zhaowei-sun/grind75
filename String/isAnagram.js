/* 

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Input: s = "anagram", t = "nagaram"
Output: true

Input: s = "rat", t = "car"
Output: false

*/

const isAnagram = (s, t) => {

    if (s.length !== t.length) return false;

    const anagramObj = {};

    for (let i = 0; i < s.length; i++) {
        if(!anagramObj[s[i]]) anagramObj[s[i]] = 1;
        else anagramObj[s[i]]++;
    }

    for (let j = 0; j < t.length; j++) {
        if(anagramObj[t[j]]) anagramObj[t[j]]--;
        else return false;
    }

    return true;
};