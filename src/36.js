/**
 * 36. Valid Sudoku
 *
 * Determine if a 9 x 9 Sudoku board is valid.
 * Only the filled cells need to be validated according to the following rules:
 *
 * Each row must contain the digits 1-9 without repetition.
 * Each column must contain the digits 1-9 without repetition.
 * Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9
 * without repetition.
 *
 * Note:
 * A Sudoku board (partially filled) could be valid but is not necessarily
 * solvable. Only the filled cells need to be validated according to the
 * mentioned rules.
 *
 * Example 1:
 * Input: board =
 * [["5","3",".",".","7",".",".",".","."]
 * ,["6",".",".","1","9","5",".",".","."]
 * ,[".","9","8",".",".",".",".","6","."]
 * ,["8",".",".",".","6",".",".",".","3"]
 * ,["4",".",".","8",".","3",".",".","1"]
 * ,["7",".",".",".","2",".",".",".","6"]
 * ,[".","6",".",".",".",".","2","8","."]
 * ,[".",".",".","4","1","9",".",".","5"]
 * ,[".",".",".",".","8",".",".","7","9"]]
 * Output: true
 *
 * Example 2:
 * Input: board =
 * [["8","3",".",".","7",".",".",".","."]
 * ,["6",".",".","1","9","5",".",".","."]
 * ,[".","9","8",".",".",".",".","6","."]
 * ,["8",".",".",".","6",".",".",".","3"]
 * ,["4",".",".","8",".","3",".",".","1"]
 * ,["7",".",".",".","2",".",".",".","6"]
 * ,[".","6",".",".",".",".","2","8","."]
 * ,[".",".",".","4","1","9",".",".","5"]
 * ,[".",".",".",".","8",".",".","7","9"]]
 * Output: false
 * Explanation: Same as Example 1, except with the 5 in the top left corner
 * being modified to 8. Since there are two 8's in the top left 3x3 sub-box,
 * it is invalid.
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let firstRule = true;
    for (let i = 0; i < 9 && firstRule; ++i) {
        const digits = {};
        for (let j = 0; j < 9 && firstRule; ++j) {
            const digit = board[i][j];
            if (digit !== '.') {
                if (digits[digit] === 1) {
                    firstRule = false;
                } else {
                    digits[digit] = 1;
                }
            }
        }
    }
    let secondRule = true;
    for (let j = 0; j < 9 && secondRule; ++j) {
        const digits = {};
        for (let i = 0; i < 9 && secondRule; ++i) {
            const digit = board[i][j];
            if (digit !== '.') {
                if (digits[digit] === 1) {
                    secondRule = false;
                } else {
                    digits[digit] = 1;
                }
            }
        }
    }
    let thirdRule = true;
    for (let i = 0; i < 3 && thirdRule; ++i) {
        for (let j = 0; j < 3 && thirdRule; ++j) {
            const digits = {};
            for (let k = 0; k < 3; ++k) {
                for (let l = 0; l < 3; ++l) {
                    const digit = board[3 * i + k][3 * j + l];
                    if (digit !== '.') {
                        if (digits[digit] === 1) {
                            thirdRule = false;
                        } else {
                            digits[digit] = 1;
                        }
                    }
                }
            }
        }
    }
    return firstRule && secondRule && thirdRule;
};

module.exports = { isValidSudoku };
