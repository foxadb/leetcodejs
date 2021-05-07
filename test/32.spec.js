const { longestValidParentheses } = require('../src/32');

describe('32. Longest Valid Parentheses', () => {
    it('s = "(()"', () => {
        expect(longestValidParentheses('(()')).toBe(2);
    });

    it('s = ")()())"', () => {
        expect(longestValidParentheses(')()())')).toBe(4);
    });

    it('s = ))(()(()))())', () => {
        expect(longestValidParentheses('))(()(()))(()')).toBe(8);
    });

    it('s = ""', () => {
        expect(longestValidParentheses('')).toBe(0);
    });
});
