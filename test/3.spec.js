const { lengthOfLongestSubstring } = require('../src/3');

describe('3. Longest Substring Without Repeating Characters', () => {
    it('Empty string', () => {
        expect(lengthOfLongestSubstring('')).toBe(0);
    });

    it('String containing only a whitespace', () => {
        expect(lengthOfLongestSubstring(' ')).toBe(1);
    });

    it('abcabcbb', () => {
        expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
    });

    it('bbbbbbbb', () => {
        expect(lengthOfLongestSubstring('bbbbbbbb')).toBe(1);
    });

    it('pwwkew', () => {
        expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
    });
});
