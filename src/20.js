/**
 * 20. Valid Parentheses
 *
 * Given a string s containing just the characters '(', ')', '{', '}',
 * '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 * - Open brackets must be closed by the same type of brackets.
 * - Open brackets must be closed in the correct order.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];
    for (const p of s) {
        if (p === '(' || p === '{' || p === '[') {
            stack.push(p);
        } else {
            const last = stack[stack.length - 1];
            if (
                p === ')' && last === '(' ||
                p === '}' && last === '{' ||
                p === ']' && last === '['
            ) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
};

module.exports = { isValid };
