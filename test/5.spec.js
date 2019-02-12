const { describe, it } = require('mocha');
const { expect } = require('chai');
const { longestPalindrome } = require('../src/5');

describe('5. Longest Palindromic Substring', () => {
   
    it('Empty string', () => {
        expect(longestPalindrome(''))
            .to.be.equal('');
    });

    it('String containing only a whitespace', () => {
        expect(longestPalindrome(' '))
            .to.be.equal(' ');
    });

    it('oc', () => {
        expect(['o', 'c'])
            .to.include(longestPalindrome('oc'));
    });

    it('babad', () => {
        expect(['aba', 'bab'])
            .to.include(longestPalindrome('babad'));
    });

    it('cbbd', () => {
        expect(longestPalindrome('cbbd'))
            .to.be.equal('bb');
    });

});