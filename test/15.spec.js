const { threeSum } = require('../src/15');

describe('15. 3Sum', () => {
    it('[]', () => {
        expect(threeSum([])).toEqual([]);
    });

    it('[0]', () => {
        expect(threeSum([0])).toEqual([]);
    });

    it('[-1, 0, 1, 2, -1, -4]', () => {
        const actual = threeSum([-1, 0, 1, 2, -1, -4]);
        expect(actual).toContainEqual([-1, -1, 2]);
        expect(actual).toContainEqual([-1, 0, 1]);
    });

    it('[-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]', () => {
        const actual = threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]);
        expect(actual).toContainEqual([-4, 0, 4]);
        expect(actual).toContainEqual([-4, 1, 3]);
        expect(actual).toContainEqual([-3, -1, 4]);
        expect(actual).toContainEqual([-3, 0, 3]);
        expect(actual).toContainEqual([-3, 1, 2]);
        expect(actual).toContainEqual([-2, -1, 3]);
        expect(actual).toContainEqual([-2, 0, 2]);
        expect(actual).toContainEqual([-1, -1, 2]);
        expect(actual).toContainEqual([-1, 0, 1]);
    });
});
