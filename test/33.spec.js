const { search } = require('../src/33');

describe('33. Search in Rotated Sorted Array', () => {
    it('nums = [4, 5, 6, 7, 0, 1, 2], target = 0', () => {
        expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
    });

    it('nums = [4, 5, 6, 7, 0, 1, 2], target = 3', () => {
        expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
    });

    it('nums = [1], target = 0', () => {
        expect(search([1], 0)).toBe(-1);
    });
});
