const { describe, it } = require('mocha');
const { expect } = require('chai');
const { findMedianSortedArrays } = require('../src/4');

describe('4. Median of Two Sorted Arrays', () => {
   
    it('[1, 3], [2]', () => {
        expect(findMedianSortedArrays(
            [1, 2],
            [2]
        )).to.be.equal(2);
    });

    it('[1, 2], [3, 4]', () => {
        expect(findMedianSortedArrays(
            [1, 2],
            [3, 4]
        )).to.be.equal(2.5);
    });
    
});