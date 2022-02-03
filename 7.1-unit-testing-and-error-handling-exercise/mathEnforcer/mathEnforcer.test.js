const { expect } = require('chai');
const mathEnforcer = require('./mathEnforcer');

describe('Math Enforcer Checker', () => {
    describe('addFive', () => {
        it('If the parameter is NOT a number, the function should return undefined.', () => {
            expect(mathEnforcer.addFive('test')).to.be.undefined;
            expect(mathEnforcer.addFive({})).to.be.undefined;
            expect(mathEnforcer.addFive([1, 2])).to.be.undefined;
            expect(mathEnforcer.addFive(true)).to.be.undefined;
            expect(mathEnforcer.addFive(false)).to.be.undefined;
        });

        it('If the parameter is a number, add 5 to it, and return the result.', () => {
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
            expect(mathEnforcer.addFive(-2)).to.be.equal(3);
            expect(mathEnforcer.addFive(5.555)).to.be.closeTo(10.55, 0.01);
        });
    });

    describe('subtractTen', () => {
        it('If the parameter is NOT a number, the function should return undefined.', () => {
            expect(mathEnforcer.subtractTen('test')).to.be.undefined;
            expect(mathEnforcer.subtractTen({})).to.be.undefined;
            expect(mathEnforcer.subtractTen([1, 2])).to.be.undefined;
            expect(mathEnforcer.subtractTen(true)).to.be.undefined;
            expect(mathEnforcer.subtractTen(false)).to.be.undefined;
        });

        it('If the parameter is a number, subtract 10 from it, and return the result.', () => {
            expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
            expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
            expect(mathEnforcer.subtractTen(-5.55)).to.be.closeTo(-15.55, 0.01);
        });
    });

    describe('sum', () => {
        it('If any of the 2 parameters is NOT a number, the function should return undefined.', () => {
            expect(mathEnforcer.sum('string', 1)).to.be.undefined;
            expect(mathEnforcer.sum({}, 1)).to.be.undefined;
            expect(mathEnforcer.sum([1, 2], 1)).to.be.undefined;
            expect(mathEnforcer.sum(true, 1)).to.be.undefined;
            expect(mathEnforcer.sum(false, 1)).to.be.undefined;

            expect(mathEnforcer.sum(1, 'string')).to.be.undefined;
            expect(mathEnforcer.sum(1, {})).to.be.undefined;
            expect(mathEnforcer.sum(1, [1, 2])).to.be.undefined;
            expect(mathEnforcer.sum(1, true)).to.be.undefined;
            expect(mathEnforcer.sum(1, false)).to.be.undefined;
        });

        it('If both parameters are numbers, the function should return their sum.', () => {
            expect(mathEnforcer.sum(10, 10)).to.be.equal(20);
            expect(mathEnforcer.sum(-5, -5)).to.be.equal(-10);
            expect(mathEnforcer.sum(5.55, 5.55)).to.be.closeTo(11.1, 0.01);
        });
    });
});
