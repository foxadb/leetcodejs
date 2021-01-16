const { longestPalindrome } = require('../src/5');

describe('5. Longest Palindromic Substring', () => {
    it('Empty string', () => {
        expect(longestPalindrome('')).toBe('');
    });

    it('String containing only a whitespace', () => {
        expect(longestPalindrome(' ')).toBe(' ');
    });

    it('oc', () => {
        expect(['o', 'c']).toContain(longestPalindrome('oc'));
    });

    it('babad', () => {
        expect(['aba', 'bab']).toContain(longestPalindrome('babad'));
    });

    it('cbbd', () => {
        expect(longestPalindrome('cbbd')).toBe('bb');
    });
});
