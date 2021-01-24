const { letterCombinations } = require('../src/17');

describe('17. Letter Combinations of a Phone Number', () => {
    it('digits = ""', () => {
        expect(letterCombinations('')).toEqual([]);
    });

    it('digits = "2"', () => {
        expect(letterCombinations('2')).toEqual(['a', 'b', 'c']);
    });

    it('digits = "23"', () => {
        expect(letterCombinations('23'))
            .toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']);
    });
});
