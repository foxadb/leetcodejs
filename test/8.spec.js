const { myAtoi } = require('../src/8');

describe('8. String to Integer (atoi)', () => {
    it('42', () => {
        expect(myAtoi('42')).toBe(42);
    });

    it('   -42', () => {
        expect(myAtoi('   -42')).toBe(-42);
    });

    it('4193 with words', () => {
        expect(myAtoi('4193 with words')).toBe(4193);
    });
});
