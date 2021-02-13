const { removeElement } = require('../src/27');

describe('27. Remove Element', () => {
    it('nums = [3, 2, 2, 3], val = 3', () => {
        const nums = [3, 2, 2, 3];
        expect(removeElement(nums, 3)).toBe(2);
        expect(nums.slice(0, 2)).toEqual([2, 2]);
    });

    it('nums = [0, 1, 2, 2, 3, 0, 4, 2], val = 2', () => {
        const nums = [0, 1, 2, 2, 3, 0, 4, 2];
        expect(removeElement(nums, 2)).toBe(5);
        expect(nums.slice(0, 5)).toEqual([0, 1, 3, 0, 4]);
    });
});
