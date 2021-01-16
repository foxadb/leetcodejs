/**
 * 7. Reverse Integer
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 *
 * Example 1:
 * Input: 123
 * Output: 321
 *
 * Example 2:
 * Input: -123
 * Output: -321
 *
 * Example 3:
 * Input: 120
 * Output: 21
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let res = 0;
    let y = Math.abs(x);

    while (y) {
        res = res * 10 + y % 10;
        y = parseInt(y / 10);
    }

    if (res.toString(2).length > 31) return 0;

    return x >= 0 ? res : -res;
};

module.exports = { reverse };
