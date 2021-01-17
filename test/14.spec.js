const { longestCommonPrefix } = require('../src/14');

describe('14. Longuest Common Prefix', () => {
    it('strs = []', () => {
        expect(longestCommonPrefix([])).toBe('');
    });

    it('strs = [""]', () => {
        expect(longestCommonPrefix([''])).toBe('');
    });

    it('strs = ["", "abc"]', () => {
        expect(longestCommonPrefix(['', 'abc'])).toBe('');
    });

    it('strs = ["flower", "flow", "flight"]', () => {
        expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl');
    });

    it('strs = ["dog", "racecar", "car"]', () => {
        expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('');
    });
});
