const { isPalindrome } = require('../src/9');

describe('9. Palindrome Number', () => {

    it('121', () => {
        expect(isPalindrome(121)).toBeTruthy();
    });

    it('-121', () => {
        expect(isPalindrome(-121)).toBeFalsy();
    });

    it('10', () => {
        expect(isPalindrome(10)).toBeFalsy();
    });
});
