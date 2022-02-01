const { expect } = require('chai');
const isSymmetric = require('./isSymmetric');

describe('Symmetry Checker', () => {
    it("Return false for any input that isn't of the correct type", () => {
        expect(isSymmetric(5, 2)).to.be.false;
    });

    it('Return true if the input array is symmetric', () => {
        expect(isSymmetric([2, 3, 3, 2])).to.be.true;
    });

    it('Return false if the input array contains different types', () => {
        expect(isSymmetric([1, 'a', 'a', 1, {}])).to.be.false;
    });

    it('Return false if one of element in array is different type', () => {
        expect(isSymmetric([1, 2, 2, '1'])).to.be.false;
    });

    it('Return false if input param is string', () => {
        expect(isSymmetric('test')).to.be.false;
    });
});
