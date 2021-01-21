const { threeSumClosest } = require('../src/16');

describe('16. 3Sum Closest', () => {
    it('nums = [-1, 2, 1, -4], target = 1', () => {
        expect(threeSumClosest([-1, 2, 1, -4], 1)).toBe(2);
    });

    it('nums = [1, 2, 4, 8, 16, 32, 64, 128], target = 82', () => {
        expect(threeSumClosest([1, 2, 4, 8, 16, 32, 64, 128], 82)).toBe(82);
    });
});
