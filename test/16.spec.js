const { threeSumClosest } = require('../src/16');

describe('16. 3Sum Closest', () => {
    it('nums = [-1, 2, 1, -4], target = 1', () => {
        expect(threeSumClosest([-1, 2, 1, -4])).toBe(2);
    });
});
