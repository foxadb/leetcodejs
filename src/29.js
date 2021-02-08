/**
 * 29. Divide Two Integers
 *
 * Given two integers dividend and divisor, divide two integers without using
 * multiplication, division, and mod operator.
 * Return the quotient after dividing dividend by divisor.
 * The integer division should truncate toward zero, which means losing its
 * fractional part. For example, truncate(8.345) = 8 and truncate(-2.7335) = -2.
 */

/**
* @param {number} dividend
* @param {number} divisor
* @return {number}
*/
var divide = function (dividend, divisor) {
    let isPositive = true;
    if (dividend < 0) {
        isPositive = !isPositive;
        dividend = 0 - dividend;
    }
    if (divisor < 0) {
        isPositive = !isPositive;
        divisor = 0 - divisor;
    }

    let result = 0;
    let remain = dividend;
    while (remain >= divisor) {
        result++;
        remain -= divisor;
    }

    if (!isPositive) {
        result = 0 - result;
    }
    return Math.min(Math.max(-2147483648, result), 2147483647);
};

module.exports = { divide };
