/**
 * 17. Letter Combinations of a Phone Number
 *
 * Given a string containing digits from 2-9 inclusive, return all possible
 * letter combinations that the number could represent. Return the answer in
 * any order.
 *
 * 2 = abc
 * 3 = def
 * 4 = ghi
 * 5 = jkl
 * 6 = mno
 * 7 = pqrs
 * 8 = tuv
 * 9 = wxyz
 *
 * Example:
 * Input: digits = '23'
 * Output: ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let combinations = [];
    for (const digit of digits) {
        let letters;
        switch (digit) {
            case '2':
                letters = ['a', 'b', 'c'];
                break;
            case '3':
                letters = ['d', 'e', 'f'];
                break;
            case '4':
                letters = ['g', 'h', 'i'];
                break;
            case '5':
                letters = ['j', 'k', 'l'];
                break;
            case '6':
                letters = ['m', 'n', 'o'];
                break;
            case '7':
                letters = ['p', 'q', 'r', 's'];
                break;
            case '8':
                letters = ['t', 'u', 'v'];
                break;
            case '9':
                letters = ['w', 'x', 'y', 'z'];
                break;
            default:
                letters = [];
        }
        if (combinations.length === 0) {
            combinations = letters;
        } else {
            const newCombinaisons = [];
            for (const combinaison of combinations) {
                for (const letter of letters) {
                    newCombinaisons.push(combinaison + letter);
                }
            }
            combinations = newCombinaisons;
        }
    }
    return combinations;
};

module.exports = { letterCombinations };
