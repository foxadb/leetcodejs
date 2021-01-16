/**
 * 13. Roman to Integer
 *
 * Roman numerals are represented by seven different symbols:
 * Symbol   Value
 * I        1
 * V        5
 * X        10
 * L        50
 * C        100
 * D        500
 * M        1000
 *
 * For example, 2 is written as II in Roman numeral, just two one's added
 * together. 12 is written as XII, which is simply X + II. The number 27 is
 * written as XXVII, which is XX + V + II.
 *
 * Roman numerals are usually written largest to smallest from left to right.
 * However, the numeral for four is not IIII. Instead, the number four is
 * written as IV. Because the one is before the five we subtract it making four.
 * The same principle applies to the number nine, which is written as IX. There
 * are six instances where subtraction is used:
 * - I can be placed before V (5) and X (10) to make 4 and 9.
 * - X can be placed before L (50) and C (100) to make 40 and 90.
 * - C can be placed before D (500) and M (1000) to make 400 and 900.
 *
 * Given a roman numeral, convert it to an integer.
 *
 * Example:
 * Input: s = "III"
 * Output: 3
 */

/**
* @param {string} s
* @return {number}
*/
var romanToInt = function (s) {
    let int = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'M') {
            int += 1000;
        }
        if (s[i] === 'C' && s[i + 1] === 'M') {
            int += 900;
            i++;
        }
        if (s[i] === 'D') {
            int += 500;
        }
        if (s[i] === 'C' && s[i + 1] === 'D') {
            int += 400;
            i++;
        }
        if (s[i] === 'C') {
            int += 100;
        }
        if (s[i] === 'X' && s[i + 1] === 'C') {
            int += 90;
            i++;
        }
        if (s[i] === 'L') {
            int += 50;
        }
        if (s[i] === 'X' && s[i + 1] === 'L') {
            int += 40;
            i++;
        }
        if (s[i] === 'X') {
            int += 10;
        }
        if (s[i] === 'I' && s[i + 1] === 'X') {
            int += 9;
            i++;
        }
        if (s[i] === 'V') {
            int += 5;
        }
        if (s[i] === 'I' && s[i + 1] === 'V') {
            int += 4;
            i++;
        }
        if (s[i] === 'I') {
            int++;
        }
    }
    return int;
};

module.exports = { romanToInt };
