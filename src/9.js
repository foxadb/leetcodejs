/**
 * 9. Palindrome Number
 * 
 * Determine whether an integer is a palindrome. An integer is a palindrome when
 * it reads the same backward as forward.
 * 
 * Example 1:
 * Input: 121
 * Output: true
 * 
 * Example 2:
 * Input: -121
 * Output: false
 * 
 * Example 3:
 * Input: 10
 * Output: false
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const reverse = String(x).split('').reverse().join('');
    return x == reverse;
};

module.exports = { isPalindrome };