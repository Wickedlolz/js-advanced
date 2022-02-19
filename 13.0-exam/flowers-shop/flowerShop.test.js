const flowerShop = require('./flowerShop');
const { expect } = require('chai');

describe('Flower Shop Checker', () => {
    describe('calcPriceOfFlowers method', () => {
        it('Testing with invalid inputs', () => {
            expect(() => flowerShop.calcPriceOfFlowers(2, 20, 2)).to.throw(
                'Invalid input!'
            );

            expect(() =>
                flowerShop.calcPriceOfFlowers('Rose', '20', 2)
            ).to.throw('Invalid input!');

            expect(() =>
                flowerShop.calcPriceOfFlowers('Rose', 20, '2')
            ).to.throw('Invalid input!');
        });

        it('Testing with correct inputs', () => {
            expect(flowerShop.calcPriceOfFlowers('Rose', 20, 2)).to.be.equal(
                `You need $40.00 to buy Rose!`
            );
        });
    });

    describe('checkFlowersAvailable method', () => {
        it('Testing if in gardenArr not present current flower', () => {
            let array = ['Rose', 'Lily', 'Orchid'];
            expect(
                flowerShop.checkFlowersAvailable('Black Rose', array)
            ).to.be.equal(
                `The Black Rose are sold! You need to purchase more!`
            );
        });

        it('Testing if flower present in gardenArr', () => {
            let array = ['Rose', 'Lily', 'Orchid'];
            expect(flowerShop.checkFlowersAvailable('Rose', array)).to.be.equal(
                `The Rose are available!`
            );
        });
    });

    describe('sellFlowers method', () => {
        let array = ['Rose', 'Lily', 'Orchid'];
        it('Testing if gardenArr is not array', () => {
            expect(() => flowerShop.sellFlowers('Rose', 0)).to.throw(
                'Invalid input!'
            );
        });

        it('Testing if space is not number', () => {
            expect(() => flowerShop.sellFlowers(array, '2')).to.throw(
                'Invalid input!'
            );
        });

        it('Testing if space is negative number', () => {
            expect(() => flowerShop.sellFlowers(array, -2)).to.throw(
                'Invalid input!'
            );
        });

        it('Testing if space is bigger then gardenArr length', () => {
            expect(() => flowerShop.sellFlowers(array, 3)).to.throw(
                'Invalid input!'
            );
        });

        it('Testing with correct inputs', () => {
            expect(flowerShop.sellFlowers(array, 1)).to.be.equal(
                'Rose / Orchid'
            );
        });
    });
});
