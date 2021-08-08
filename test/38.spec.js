const { countAndSay } = require('../src/38');

describe('38. Count and Say', () => {
    it('n = 1', () => {
        expect(countAndSay(1)).toBe('1');
    });

    it('n = 2', () => {
        expect(countAndSay(2)).toBe('11');
    });

    it('n = 3', () => {
        expect(countAndSay(3)).toBe('21');
    });

    it('n = 4', () => {
        expect(countAndSay(4)).toBe('1211');
    });

    it('n = 5', () => {
        expect(countAndSay(5)).toBe('111221');
    });
});
