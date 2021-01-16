const { findMedianSortedArrays } = require('../src/4');

describe('4. Median of Two Sorted Arrays', () => {
    it('[1, 3], [2]', () => {
        expect(findMedianSortedArrays(
            [1, 2],
            [2]
        )).toBe(2);
    });

    it('[1, 2], [3, 4]', () => {
        expect(findMedianSortedArrays(
            [1, 2],
            [3, 4]
        )).toBe(2.5);
    });

    it('[1, 3, 8, 9, 15], [7, 12, 16, 19, 23, 36]', () => {
        expect(findMedianSortedArrays(
            [1, 3, 8, 9, 15],
            [7, 12, 16, 19, 23, 36]
        )).toBe(12);
    });

    it('[42, 64, 68], [4, 8, 12, 16, 20]', () => {
        expect(findMedianSortedArrays(
            [42, 64, 68],
            [4, 8, 12, 16, 20]
        )).toBe(18);
    });
});
