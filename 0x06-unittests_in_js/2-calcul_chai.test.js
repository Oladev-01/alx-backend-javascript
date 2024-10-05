const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('SUM', () => {
    it('should return the expected value for SUM', () => {
        expect(calculateNumber('SUM', 2, 4.5)).to.equal(7);
        expect(calculateNumber('SUM', 2, -4.5)).to.equal(-2);
        expect(calculateNumber('SUM', -2, -4.5)).to.equal(-6);
    });
});

describe('SUBTRACT', () => {
    it('should return expected value for SUBTRACT', () => {
        expect(calculateNumber('SUBTRACT', -2, -4.5)).to.equal(2);
        expect(calculateNumber('SUBTRACT', 2, -4.5)).to.equal(6);
    });
});

describe('DIVIDE', () => {
    it('should return the expected value for DIVIDE', () => {
        expect(calculateNumber('DIVIDE', -2, 4.5)).to.equal(-0.4);
        expect(calculateNumber('DIVIDE', 2, 0)).to.equal('Error');
        expect(calculateNumber('DIVIDE', 0, 4.5)).to.equal(0);
        expect(calculateNumber('DIVIDE', -0, -0)).to.equal('Error');
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
});
