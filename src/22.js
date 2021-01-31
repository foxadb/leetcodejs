/**
 * 22. Generate Parentheses
 *
 * Given n pairs of parentheses, write a function to generate all combinations
 * of well-formed parentheses.
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n, res = [], current = '', open = 0, close = 0) {
    if (current.length === n * 2) {
        res.push(current);
    }
    if (open < n) {
        generateParenthesis(n, res, current + '(', open + 1, close);
    }
    if (open > close) {
        generateParenthesis(n, res, current + ')', open, close + 1);
    }
    return res;
};

module.exports = { generateParenthesis };
