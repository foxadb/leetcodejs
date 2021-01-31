const { generateParenthesis } = require('../src/22');

describe('22. Generate Parentheses', () => {
    it('n = 1', () => {
        const parentheses = generateParenthesis(1);
        expect(parentheses).toContain('()');
    });

    it('n = 2', () => {
        const parentheses = generateParenthesis(2);
        expect(parentheses).toContain('(())');
        expect(parentheses).toContain('()()');
    });

    it('n = 3', () => {
        const parentheses = generateParenthesis(3);
        expect(parentheses).toContain('((()))');
        expect(parentheses).toContain('(()())');
        expect(parentheses).toContain('(())()');
        expect(parentheses).toContain('()(())');
        expect(parentheses).toContain('()()()');
    });
});
