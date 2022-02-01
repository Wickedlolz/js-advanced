const { expect } = require('chai');
const sum = require('./sum');

describe('Sum Checker', () => {
    it('Return rigth sum', () => {
        expect(sum([5, 5, 5])).to.be.equal(15);
        expect(sum([0])).to.be.equal(0);
    });

    it('Return NaN if given array contains string', () => {
        expect(sum([1, 'a', 2])).to.be.NaN;
    });

    it('Return NaN if array contains only strings', () => {
        expect(sum(['a', 'b', 'c'])).to.be.NaN;
    });
});
