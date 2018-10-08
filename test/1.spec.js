const { describe, it } = require('mocha');
const { expect } = require('chai');
const { twoSum } = require('../src/1');

describe('1. Two Sum', () => {
   
    it('[2, 7, 11, 15]', () => {
        expect(twoSum([2, 7, 11, 15], 9))
            .eql([0, 1]);
    });

    it('[3, 3]', () => {
        expect(twoSum([3, 3], 6))
            .eql([0, 1]);
    });
    
});