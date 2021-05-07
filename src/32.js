/**
 * 32. Longest Valid Parentheses
 *
 * Given a string containing just the characters '(' and ')', find the length
 * of the longest valid (well-formed) parentheses substring.
 *
 * Example 1:
 * Input: s = "(()"
 * Output: 2
 * Explanation: The longest valid parentheses substring is "()".
 *
 * Example 2:
 * Input: s = ")()())"
 * Output: 4
 * Explanation: The longest valid parentheses substring is "()()".
 *
 * Example 3:
 * Input: s = ""
 * Output: 0
 */

/**
* @param {string} s
* @return {number}
*/
var longestValidParentheses = function (s) {
    let longest = 0;
    const stack = [-1];
    for (let i = 0; i < s.length; ++i) {
        if (s[i] === '(') {
            stack.push(i);
        } else {
            stack.pop();
            if (stack.length) {
                const lastStackIndex = stack[stack.length - 1];
                longest = Math.max(longest, i - lastStackIndex);
            } else {
                stack.push(i);
            }
        }
    }
    return longest;
};

module.exports = { longestValidParentheses };
