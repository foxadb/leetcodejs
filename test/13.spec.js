const { expect } = require('chai');
const { describe, it } = require('mocha');
const { romanToInt } = require('../src/13');

describe('13. Roman to Integer', () => {
    it('I = 1', () => {
        expect(romanToInt('I')).to.be.eq(1);
    });

    it('IV = 4', () => {
        expect(romanToInt('IV')).to.be.eq(4);
    });

    it('IX = 9', () => {
        expect(romanToInt('IX')).to.be.eq(9);
    });

    it('LVIII = 58', () => {
        expect(romanToInt('LVIII')).to.be.eq(58);
    });

    it('MCMXCIV = 1994', () => {
        expect(romanToInt('MCMXCIV')).to.be.eq(1994);
    });
});
