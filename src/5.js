/**
 * 5. Longest Palindromic Substring
 * 
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

    for (let i = 0; i < s.length; ++i) {
        // One character center palindrome
        const oddSub = expandSubstring(s, i, i);
        if (oddSub.length > maxSub.length) {
            maxSub = oddSub;
        }

        // Two characters center palindrome
        const evenSub = expandSubstring(s, i, i + 1);
        if (evenSub.length > maxSub.length) {
            maxSub = evenSub;
        }
    }

    return maxSub;
};

/**
 * Find the longest palindrome substring by expanding from start and end indexes
 * @param {string} s 
 * @param {number} start 
 * @param {number} end 
 */
var expandSubstring = (s, start, end) => {
    while (
        // Don't expand outside of the source string
        start >= 0 && end < s.length
        // Palindrome condition
        && s.charAt(start) === s.charAt(end)
    ) {
        // Expand start and end indexes
        --start;
        ++end;
    }
    return s.slice(start + 1, end);
};

module.exports = { longestPalindrome };