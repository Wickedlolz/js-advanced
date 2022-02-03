const { expect } = require('chai');
const lookupChar = require('./lookupChar');

describe('Lookup Char Checker', () => {
    it('If the first parameter is NOT a string or the second parameter is NOT a number - return undefined.', () => {
        expect(lookupChar(5, 'test')).to.be.undefined;
        expect(lookupChar('test', 'test')).to.be.undefined;
        expect(lookupChar({}, 2)).to.be.undefined;
        expect(lookupChar([], 2)).to.be.undefined;
        expect(lookupChar('test', {})).to.be.undefined;
        expect(lookupChar('test', [])).to.be.undefined;
        expect(lookupChar({}, {})).to.be.undefined;
        expect(lookupChar([], [])).to.be.undefined;
        expect(lookupChar('Test', 2.5)).to.be.undefined;
    });

    it('If both parameters are of the correct type but the value of the index is incorrect - return "Incorrect index".', () => {
        expect(lookupChar('Test', 5)).to.be.equal('Incorrect index');
        expect(lookupChar('Test', -1)).to.be.equal('Incorrect index');
    });

    it('If both parameters have correct types and values - return the character at the specified index in the string.', () => {
        expect(lookupChar('Test', 2)).to.be.equal('s');
    });
});
