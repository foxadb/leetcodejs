/**
 * 10. Regular Expression Matching
 * Given an input string (s) and a pattern (p), implement regular expression
 * matching with support for '.' and '*' where:
 * - '.' Matches any single character.​​​​
 * - '*' Matches zero or more of the preceding element.
 * The matching should cover the entire input string (not partial).
 *
 * Example:
 * Input: s = "aab", p = "c*a*b"
 * Output: true
 * Explanation: c can be repeated 0 times, a can be repeated 1 time.
 * Therefore, it matches "aab".
 */

/**
* @param {string} s
* @param {string} p
* @return {boolean}
*/
var isMatch = function (s, p) {
    if (!p) {
        return !s;
    }
    const firstMatch = !!s && [s[0], '.'].includes(p[0]);
    if (p.length > 1 && p[1] === '*') {
        return isMatch(s, p.slice(2)) || (firstMatch && isMatch(s.slice(1), p));
    } else {
        return firstMatch && isMatch(s.slice(1), p.slice(1));
    }
};

module.exports = { isMatch };
