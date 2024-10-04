const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('should return the sum of two rounded numbers', () => {
        assert.strictEqual(calculateNumber(1, 3), 4),
            assert.strictEqual(calculateNumber(1.1, 3), 4),
            assert.strictEqual(calculateNumber(1.1, 3.1), 4),
            assert.strictEqual(calculateNumber(1.5, 3), 5),
            assert.strictEqual(calculateNumber(1.5, 3.1), 5),
            assert.strictEqual(calculateNumber(1.6, 3.5), 6),
            assert.strictEqual(calculateNumber(1.6, 3.99), 6),
            assert.strictEqual(calculateNumber(1.15, 3.25), 4),
            assert.strictEqual(calculateNumber(1.62, 3), 5),
            assert.strictEqual(calculateNumber(-1, -1), -2),
            assert.strictEqual(calculateNumber(-1.62, 3), 1),
            assert.strictEqual(calculateNumber(-1.62, 1.62), 0),
            assert.strictEqual(calculateNumber(0, 0), 0)
    });
    it('handle edge cases', () => {
        assert.strictEqual(calculateNumber(-0, -0), -0),
        assert.strictEqual(calculateNumber(-0, 0), 0),
        assert.strictEqual(calculateNumber(-0, 5), 5)
    });
});
