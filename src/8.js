/**
 * 8. String to Integer (atoi)
 * 
 * Implement atoi which converts a string to an integer.
 * The function first discards as many whitespace characters as necessary until
 * the first non-whitespace character is found. Then, starting from this
 * character, takes an optional initial plus or minus sign followed by as many
 * numerical digits as possible, and interprets them as a numerical value.
 * The string can contain additional characters after those that form the
 * integral number, which are ignored and have no effect on the behavior of
 * this function.
 * If the first sequence of non-whitespace characters in str is not a valid
 * integral number, or if no such sequence exists because either str is empty
 * or it contains only whitespace characters, no conversion is performed.
 * If no valid conversion could be performed, a zero value is returned.
 * 
 * Example 1:
 * Input: "42"
 * Output: 42
 * 
 * Example 2:
 * Input: "   -42"
 * Output: -42
 * 
 * Example 3:
 * Input: "4193 with words"
 * Output: 4193
 */

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    const trimedStr = str.trim();
    const regex = /^(\-|\+)?[0-9]+/;
    var resArr = regex.exec(trimedStr);
  
    if (resArr) {
      const res = Number(resArr[0]);
      if (res < -2147483648)
        return -2147483648;
      if (res > 2147483647)
        return 2147483647;
      return res;
    }
  
    return 0;
};

module.exports = { myAtoi };