const { expect } = require('chai');
const createCalculator = require('./createCalculator');

describe('Calculator Checker', () => {
    it('Testing if return object', () => {
        expect(createCalculator()).to.be.instanceOf(Object);
    });

    it('Testing if object contains add, subtract and get functions', () => {
        expect(createCalculator()).to.haveOwnProperty('add');
        expect(createCalculator()).to.haveOwnProperty('subtract');
        expect(createCalculator()).to.haveOwnProperty('get');
    });

    it('Testing if adding 5 get returns 5', () => {
        let calc = createCalculator();
        calc.add(5);

        expect(calc.get()).to.be.equal(5);
    });

    it('Testing if from sum 10 subtract 5 and returns 5', () => {
        let calc = createCalculator();
        calc.add(10);
        calc.subtract(5);

        expect(calc.get()).to.be.equal(5);
    });
});
