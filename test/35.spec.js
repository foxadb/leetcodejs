const { searchInsert } = require('../src/35');

describe('35. Search Insert Position', () => {
    it('nums = [1, 3, 5, 6], target = 5', () => {
        expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
    });

    it('nums = [1, 3, 5, 6], target = 7', () => {
        expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
    });

    it('nums = [1, 3, 5, 6], target = 0', () => {
        expect(searchInsert([1, 3, 5, 6], 0)).toBe(0);
    });
});
