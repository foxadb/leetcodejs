/**
 * 14. Longest Common Prefix
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings. If there is no common prefix, return an empty string "".
 *
 * Example:
 * Input: strs = ["flower", "flow", "flight"]
 * Output: "fl"
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let prefix = '';
    let samePrefixLetter = strs.length > 0 && strs[0].length > 0;
    let i = 0;
    while (samePrefixLetter) {
        const currentLetter = strs[0][i];
        for (const str of strs) {
            if (!currentLetter || currentLetter !== str[i]) {
                samePrefixLetter = false;
            }
        }
        if (samePrefixLetter) {
            prefix += currentLetter;
            i++;
        }
    }
    return prefix;
};

module.exports = { longestCommonPrefix };
