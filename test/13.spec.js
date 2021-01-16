const { romanToInt } = require('../src/13');

describe('13. Roman to Integer', () => {
    it('I = 1', () => {
        expect(romanToInt('I')).toBe(1);
    });

    it('IV = 4', () => {
        expect(romanToInt('IV')).toBe(4);
    });

    it('IX = 9', () => {
        expect(romanToInt('IX')).toBe(9);
    });

    it('LVIII = 58', () => {
        expect(romanToInt('LVIII')).toBe(58);
    });

    it('MCMXCIV = 1994', () => {
        expect(romanToInt('MCMXCIV')).toBe(1994);
    });
});
