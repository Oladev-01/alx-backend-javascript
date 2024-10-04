const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    it('should return the expected value for SUM', () => {
        assert.strictEqual(calculateNumber('SUM', 2, 4.5), 7),
            assert.strictEqual(calculateNumber('SUM', 2, -4.5), -2),
            assert.strictEqual(calculateNumber('SUM', -2, -4.5), -6)
    });

    it('should return expected value for SUBTRACT', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', -2, -4.5), 2),
            assert.strictEqual(calculateNumber('SUBTRACT', 2, -4.5), 6)
    });

    it('should return the expected value for DIVIDE', () => {
        assert.strictEqual(calculateNumber('DIVIDE', -2, 4.5), -0.4),
        assert.strictEqual(calculateNumber('DIVIDE', 2, 0), 'Error'),
        assert.strictEqual(calculateNumber('DIVIDE', 0, 4.5), 0),
        assert.strictEqual(calculateNumber('DIVIDE', -0, -0), 'Error'),
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2)
    });
});
