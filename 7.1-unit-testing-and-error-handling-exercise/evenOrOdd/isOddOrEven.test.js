const { expect } = require("chai");
const isOddOrEven = require("./isOddorEven");

describe("Odd or Even Checker", () => {
    it("Should return undefined if get different type of input", () => {
        expect(isOddOrEven(5)).to.be.undefined;
        expect(isOddOrEven([])).to.be.undefined;
        expect(isOddOrEven({})).to.be.undefined;
    });

    it("Should return even if string length is even", () => {
        expect(isOddOrEven("Test")).to.be.equal("even");
    });

    it("Should return odd if string length is odd", () => {
        expect(isOddOrEven("Tes")).to.be.equal("odd");
    });
});
