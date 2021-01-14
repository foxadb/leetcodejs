const { expect } = require('chai');
const { describe, it } = require('mocha');
const { maxArea } = require('../src/11');

describe('11. Container With Most Water', () => {
    it('height = [1, 8, 6, 2, 5, 4, 8, 3, 7]', () => {
        expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).to.be.eq(49);
    });

    it('height = [1, 1]', () => {
        expect(maxArea([1, 1])).to.be.eq(1);
    });

    it('height = [4, 3, 2, 1, 4]', () => {
        expect(maxArea([4, 3, 2, 1, 4])).to.be.eq(16);
    });

    it('height = [1, 2, 1]', () => {
        expect(maxArea([1, 2, 1])).to.be.eq(2);
    });
});
