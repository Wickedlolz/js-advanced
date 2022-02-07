const { expect, assert } = require('chai');
const PaymentPackage = require('./PaymentPackage');

describe('Payment Package Checker', () => {
    it('Testing with correct two parameters and set new one', () => {
        let package = new PaymentPackage('Paypal', 20);
        expect(package.name).to.be.equal('Paypal');
        expect(package.value).to.be.equal(20);

        package.name = 'EasyPay';
        package.value = 30;

        expect(package.name).to.be.equal('EasyPay');
        expect(package.value).to.be.equal(30);
    });

    it('Testing with incorrect params', () => {
        assert.throws(() => {
            new PaymentPackage(20, 20);
        }, 'Name must be a non-empty string');

        assert.throws(() => {
            new PaymentPackage('20', '20');
        }, 'Value must be a non-negative number');

        assert.throws(
            () => new PaymentPackage('', 20),
            'Name must be a non-empty string'
        );
        assert.throws(
            () => new PaymentPackage('Test', -20),
            'Value must be a non-negative number'
        );
    });

    it('Testing if VAT return default value', () => {
        let package = new PaymentPackage('Test', 20);
        assert.equal(package.VAT, 20);
    });

    it('Testing if set new value of VAT', () => {
        let package = new PaymentPackage('HR', 200);
        package.VAT = 35;

        assert.equal(package.VAT, 35);
    });

    it('Testing if give to VAT invalid value and negative value', () => {
        let package = new PaymentPackage('Test', 20);
        assert.throws(
            () => (package.VAT = ''),
            'VAT must be a non-negative number'
        );

        assert.throws(
            () => (package.VAT = -20),
            'VAT must be a non-negative number'
        );
    });

    it('Testing if active retrun default value', () => {
        let package = new PaymentPackage('Test', 20);
        assert.equal(package.active, true);
    });

    it('Testing if set invalid value in active', () => {
        let package = new PaymentPackage('Test', 20);
        assert.throws(
            () => (package.active = 'test'),
            'Active status must be a boolean'
        );
    });

    it('Testing toString() method', () => {
        let package = new PaymentPackage('HR', 200);

        if (package.active == true) {
            let expected = `Package: HR\n- Value (excl. VAT): 200\n- Value (VAT 20%): 240`;
            assert.equal(package.toString(), expected);
        } else {
            let expected = `Package: HR (inactive)\n- Value (excl. VAT): 200\n- Value (VAT 20%): 240`;
            package.active = false;
            assert.equal(package.toString(), expected);
        }
    });
});
