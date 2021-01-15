const { expect } = require('chai');
const { describe, it } = require('mocha');
const { intToRoman } = require('../src/12');

describe('12. Integer to Roman', () => {
    it('1 = I', () => {
        expect(intToRoman(1)).to.be.eq('I');
    });

    it('4 = IV', () => {
        expect(intToRoman(4)).to.be.eq('IV');
    });

    it('9 = IX', () => {
        expect(intToRoman(9)).to.be.eq('IX');
    });

    it('58 = LVIII', () => {
        expect(intToRoman(58)).to.be.eq('LVIII');
    });

    it('1994 = MCMXCIV', () => {
        expect(intToRoman(1994)).to.be.eq('MCMXCIV');
    });
});
