const { isMatch } = require('../src/10');

describe('10. Regular Expression Matching', () => {
    it('s = "aa", p = "a"', () => {
        expect(isMatch('aa', 'a')).toBeFalsy();
    });

    it('s = "aa", p = "a*"', () => {
        expect(isMatch('aa', 'a*')).toBeTruthy();
    });

    it('s = "ab", p = ".*"', () => {
        expect(isMatch('ab', '.*')).toBeTruthy();
    });

    it('s = "aab", p = "c*a*b*"', () => {
        expect(isMatch('aab', 'c*a*b*')).toBeTruthy();
    });
});
