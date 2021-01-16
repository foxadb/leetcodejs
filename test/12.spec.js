const { intToRoman } = require('../src/12');

describe('12. Integer to Roman', () => {
    it('1 = I', () => {
        expect(intToRoman(1)).toBe('I');
    });

    it('4 = IV', () => {
        expect(intToRoman(4)).toBe('IV');
    });

    it('9 = IX', () => {
        expect(intToRoman(9)).toBe('IX');
    });

    it('58 = LVIII', () => {
        expect(intToRoman(58)).toBe('LVIII');
    });

    it('1994 = MCMXCIV', () => {
        expect(intToRoman(1994)).toBe('MCMXCIV');
    });
});
