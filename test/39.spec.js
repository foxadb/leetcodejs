const { combinationSum } = require('../src/39');

describe('39. Combinaison Sum', () => {
    it('candidates = [2, 3, 6, 7], target = 7', () => {
        const results = combinationSum([2, 3, 6, 7], 7);
        expect(results).toHaveLength(2);
        expect(results).toContainEqual([2, 2, 3]);
        expect(results).toContainEqual([7]);
    });

    it('candidates = [2, 3, 5], target = 8', () => {
        const results = combinationSum([2, 3, 5], 8);
        expect(results).toHaveLength(30);
        expect(results).toContainEqual([2, 2, 2, 2]);
        expect(results).toContainEqual([2, 3, 3]);
        expect(results).toContainEqual([3, 5]);
    });

    it('candidates = [2], target = 1', () => {
        const results = combinationSum([2], 1);
        expect(results).toHaveLength(0);
    });

    it('candidates = [1], target = 1', () => {
        const results = combinationSum([1], 1);
        expect(results).toHaveLength(1);
        expect(results).toContain([1]);
    });

    it('candidates = [1], target = 2', () => {
        const results = combinationSum([1], 2);
        expect(results).toHaveLength(1);
        expect(results).toContainEqual([1, 1]);
    });
});
