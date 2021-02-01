const { strStr } = require('../src/28');

describe('28. Implement strStr()', () => {
    it('haystack = "", needle = ""', () => {
        expect(strStr('', '')).toBe(0);
    });

    it('haystack = "aaaaa", needle = "bba"', () => {
        expect(strStr('aaaaa', 'bba')).toBe(-1);
    });

    it('haystack = "hello", needle = "ll"', () => {
        expect(strStr('hello', 'll')).toBe(2);
    });
});
