const { reverse } = require('../src/7');

describe('7. Reverse Integer', () => {
    it('0', () => {
        expect(reverse(0)).toBe(0);
    });

    it('123', () => {
        expect(reverse(123)).toBe(321);
    });

    it('-123', () => {
        expect(reverse(-123)).toBe(-321);
    });

    it('120', () => {
        expect(reverse(120)).toBe(21);
    });

    it('1534236469', () => {
        expect(reverse(1534236469)).toBe(0);
    });

    it('-2147483412', () => {
        expect(reverse(-2147483412)).toBe(-2143847412);
    });
});
