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

    it('Testing add and subtract', () => {
        let calc = createCalculator();
        calc.add(10);
        calc.add(15);
        calc.subtract(5);

        expect(calc.get()).to.be.equal(20);
    });

    it('Testing with different types param', () => {
        let calc = createCalculator();
        calc.add('test');
        calc.add({});
        calc.add([]);

        expect(calc.get()).to.be.NaN;
    });

    it('Testing if internal sum is 0 whithout adding or subtract', () => {
        let calc = createCalculator();
        expect(calc.get()).to.be.equal(0);
    });
});
