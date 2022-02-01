const { expect } = require('chai');
const rgbToHexColor = require('./rgbToHexColor');

describe('RGB to HEX Checker', () => {
    it('Testing with negative params ', () => {
        expect(rgbToHexColor(-1, -1, -1)).to.be.undefined;
    });

    it('Testing with params under the range', () => {
        expect(rgbToHexColor(256, 256, 256)).to.be.undefined;
    });

    it('Testing with one negative param', () => {
        expect(rgbToHexColor(255, 255, -1)).to.be.undefined;
        expect(rgbToHexColor(255, -1, 255)).to.be.undefined;
        expect(rgbToHexColor(-1, 255, 255)).to.be.undefined;
    });

    it('Testing with different type inputs', () => {
        expect(rgbToHexColor('a', 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, '0', 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, '0')).to.be.undefined;
    });

    it('Testing with one string and one digit params', () => {
        expect(rgbToHexColor('test')).to.be.undefined;
        expect(rgbToHexColor(1)).to.be.undefined;
        expect(rgbToHexColor([])).to.be.undefined;
    });

    it('Testing with 255, 158, 170 to return #FF9EAA', () => {
        expect(rgbToHexColor(255, 158, 170)).to.be.equal('#FF9EAA');
    });

    it('Testing if returns white', () => {
        expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF');
    });

    it('Testing if return black', () => {
        expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
    });

    it('Testing if return value is a string', () => {
        expect(rgbToHexColor(0, 0, 0)).to.be.string;
    });
});
