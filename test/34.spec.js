const { searchRange } = require('../src/34');

describe('34. Find First and Last Position of Element in Sorted Array', () => {
    it('nums = [5, 7, 7, 8, 8, 10], target = 8', () => {
        expect(searchRange([5, 7, 7, 8, 8, 10], 8)).toEqual([3, 4]);
    });

    it('nums = [5, 7, 7, 8, 8, 10], target = 6', () => {
        expect(searchRange([5, 7, 7, 8, 8, 10], 6)).toEqual([-1, -1]);
    });

    it('nums = [], target = 0', () => {
        expect(searchRange([], 0)).toEqual([-1, -1]);
    });
});
