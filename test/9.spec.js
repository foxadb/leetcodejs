const { describe, it } = require('mocha');
const { expect } = require('chai');
const { isPalindrome } = require('../src/9');

describe('9. Palindrome Number', () => {
   
    it('121', () => {
        expect(isPalindrome(121)).to.be.true;
    });

    it('-121', () => {
        expect(isPalindrome(-121)).to.be.false;
    });

    it('10', () => {
        expect(isPalindrome(10)).to.be.false;
    });

});