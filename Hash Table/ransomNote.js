/*

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Input: ransomNote = "a", magazine = "b"
Output: false

Input: ransomNote = "aa", magazine = "ab"
Output: false

Input: ransomNote = "aa", magazine = "aab"
Output: true

*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

const canConstruct = (ransomNote, magazine) => {
    const cache = {};
    //iterate through magazine and save all letters and freqs
    for (let i = 0; i < magazine.length; i++) {
        cache[magazine[i]] ? cache[magazine[i]]++ : cache[magazine[i]] = 1;
    }
    //iterate through ransomNode and deduct everytime a letter is used
    for (let j = 0; j < ransomNote.length; j++) {
    //when we reach 0 or undefined, return false
       if (cache[ransomNote[j]]) cache[ransomNote[j]]--;
       else return false;
    }
    //otherwise return true
    return true;
};