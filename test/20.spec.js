const { isValid } = require('../src/20');

describe('20. Valid Parentheses', () => {
    it('s = "()"', () => {
        expect(isValid('()')).toBeTruthy();
    });

    it('s = "()[]{}"', () => {
        expect(isValid('()[]{}')).toBeTruthy();
    });

    it('s = "(]"', () => {
        expect(isValid('(]')).toBeFalsy();
    });

    it('s = "([)]"', () => {
        expect(isValid('([)]')).toBeFalsy();
    });

    it('s = "{[]}"', () => {
        expect(isValid('{[]}')).toBeTruthy();
    });

    it('s = "["', () => {
        expect(isValid('[')).toBeFalsy();
    })
});
