const { describe, it } = require('mocha');
const { expect } = require('chai');
const { lengthOfLongestSubstring } = require('../src/3');

describe('3. Longest Substring Without Repeating Characters', () => {
   
    it('Empty string', () => {
        expect(lengthOfLongestSubstring(''))
            .to.be.equal(0);
    });

    it('String containing only a whitespace', () => {
        expect(lengthOfLongestSubstring(' '))
            .to.be.equal(1);
    });

    it('abcabcbb', () => {
        expect(lengthOfLongestSubstring('abcabcbb'))
            .to.be.equal(3);
    });

    it('bbbbbbbb', () => {
        expect(lengthOfLongestSubstring('bbbbbbbb'))
            .to.be.equal(1);
    });

    it('pwwkew', () => {
        expect(lengthOfLongestSubstring('pwwkew'))
            .to.be.equal(3);
    });
    
});