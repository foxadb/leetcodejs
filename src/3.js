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
    let longestLength = 0;

    for (let i = 0; i < s.length; ++i) {
        // Init counter variables
        let currentLength = 0;
        let alreadyIn = [];

        for (let j = i; j < s.length; ++j) {
            const currentChar = s.charAt(j);

            // Exit loop if char already included
            if (alreadyIn.includes(currentChar)) {
                break;
            } else {
                ++currentLength;
                alreadyIn.push(currentChar);
            }
        }
        // Compute new longest length
        longestLength = Math.max(longestLength, currentLength);
    }

    return longestLength;
};

module.exports = { lengthOfLongestSubstring };