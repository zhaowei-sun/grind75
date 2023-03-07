/*

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Input: s = "()"
Output: true

Input: s = "()[]{}"
Output: true

Input: s = "(]"
Output: false

*/

const isValid = (s) => {
    const parents = {
        '[':']',
        '(':')',
        '{':'}'
    };
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        //if it exists, push the value into the stack
        if (parents[s[i]]) stack.push(parents[s[i]]);
        //if it doesn't, pop the last one off the stack and compare it with the curr el
        else {
            if (stack.pop() !== s[i]) return false;
        }
    }
    return stack.length === 0 ? true : false;
};