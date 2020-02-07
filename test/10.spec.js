const { expect } = require('chai');
const { describe, it } = require('mocha');
const { isMatch } = require('../src/10');

describe('10. Regular Expression Matching', () => {
    it('s = "aa", p = "a"', () => {
        expect(isMatch('aa', 'a')).to.be.false;
    });

    it('s = "aa", p = "a*"', () => {
        expect(isMatch('aa', 'a*')).to.be.true;
    });

    it('s = "ab", p = ".*"', () => {
        expect(isMatch('ab', '.*')).to.be.true;
    });

    it('s = "aab", p = "c*a*b*"', () => {
        expect(isMatch('aab', 'c*a*b*')).to.be.true;
    });
});
