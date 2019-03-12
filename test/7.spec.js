const { describe, it } = require('mocha');
const { expect } = require('chai');
const { reverse } = require('../src/7');

describe('7. Reverse Integer', () => {

    it('0', () => {
        expect(reverse(0))
            .to.be.equal(0);
    });

    it('123', () => {
        expect(reverse(123))
            .to.be.equal(321);
    });

    it('-123', () => {
        expect(reverse(-123))
            .to.be.equal(-321);
    });

    it('120', () => {
        expect(reverse(120))
            .to.be.equal(21);
    });

    it('1534236469', () => {
        expect(reverse(1534236469))
            .to.be.equal(0);
    });

    it('-2147483412', () => {
        expect(reverse(-2147483412))
            .to.be.equal(-2143847412);
    });

});