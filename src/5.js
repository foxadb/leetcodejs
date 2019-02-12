/**
 * 5. Longest Palindromic Substring
 * Given a string s, find the longest palindromic substring in s.
 * You may assume that the maximum length of s is 1000.
 * 
 * Example 1:
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 * 
 * Example 2:
 * Input: "cbbd"
 * Output: "bb"
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let maxSub = '';

    // Reverse the string
    const r = s.split('').reverse().join('');

    // Search for common substrings
    const n = s.length;
    for (let i = 0; i < n; ++i) {
        for (let j = i; j < n; ++j) {
            const subS = s.slice(i, j + 1);
            const subR = r.slice(n - j - 1, n - i);

            if (subS === subR && maxSub.length < subS.length) {
                maxSub = subS;
            }
        }
    } 

    return maxSub;
};

module.exports = { longestPalindrome };