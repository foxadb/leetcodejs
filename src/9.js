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
var isPalindrome = function (x) {
    if (x >= 0) {
        // Find highest 10 divisor of x
        let divisor = 1;
        while (x / divisor >= 10) {
            divisor *= 10;
        }

        while (x !== 0) {
            const leading = Math.floor(x / divisor);
            const trailing = x % 10;

            // Check if leading and trailing digits are identical
            if (leading !== trailing) {
                return false;
            }

            // Removing leading and trailing digits
            x = Math.floor((x % divisor) / 10);
            divisor /= 100;
        }

        return true;
    } else {
        return false;
    }
};

module.exports = { isPalindrome };