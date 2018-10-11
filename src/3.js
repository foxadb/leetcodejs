/**
 * 3. Longest Substring Without Repeating Characters
 * 
 * Given a string, find the length of the longest substring without repeating
 * characters.
 * 
 * Example 1:
 * Input: "abcabcbb"
 * Output: 3 
 * Explanation: The answer is "abc", with the length of 3. 
 * 
 * Example 2:
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * 
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let start = 0, maxLength = 0;
    const map = new Map();

    for (let i = 0; i < s.length; i++) {
        // Current character
        const char = s.charAt(i);

        // Update start of the substring
        if (map.get(char) >= start) {
            start = map.get(char) + 1;
        }

        // Set last know position of current character
        map.set(char, i);

        // Compute max substring length
        maxLength = Math.max(maxLength, i - start + 1);
    }

    return maxLength;
};

module.exports = { lengthOfLongestSubstring };