const { describe, it } = require('mocha');
const { expect } = require('chai');
const { convert } = require('../src/6');

describe('6. ZigZag Convertion', () => {

    it('A, 2', () => {
        expect(convert('A', 2))
            .eql('A');
    });

    it('PAYPALISHIRING, 3', () => {
        expect(convert('PAYPALISHIRING', 3))
            .eql('PAHNAPLSIIGYIR');
    });

    it('PAYPALISHIRING, 4', () => {
        expect(convert('PAYPALISHIRING', 4))
            .eql('PINALSIGYAHRPI');
    });
    
});