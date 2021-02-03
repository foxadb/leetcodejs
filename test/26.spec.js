const { removeDuplicates } = require('../src/26');

describe('26. Remove Duplicates from Sorted Array', () => {
    it('[1, 1, 2]', () => {
        const arr = [1, 1, 2];
        expect(removeDuplicates(arr)).toBe(2);
        expect(arr).toEqual([1, 2]);
    });

    it('[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]', () => {
        const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
        expect(removeDuplicates(arr)).toBe(5);
        expect(arr).toEqual([0, 1, 2, 3, 4]);
    });
});
