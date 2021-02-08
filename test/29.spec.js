const { divide } = require('../src/29');

describe('29. Divide Two Integers', () => {
    it('dividend = 10, divisor = 3', () => {
        expect(divide(10, 3)).toBe(3);
    });

    it('dividend = 7, divisor = -3', () => {
        expect(divide(7, -3)).toBe(-2);
    });

    it('dividend = 0, divisor = 1', () => {
        expect(divide(0, 1)).toBe(0);
    });

    it('dividend = 1, divisor = 1', () => {
        expect(divide(1, 1)).toBe(1);
    });

    it('dividend = -5, divisor = -2', () => {
        expect(divide(-5, -2)).toBe(2);
    });

    it('dividend = -2147483648, divisor = -1', () => {
        expect(divide(-2147483648, -1)).toBe(2147483647);
    });
});
