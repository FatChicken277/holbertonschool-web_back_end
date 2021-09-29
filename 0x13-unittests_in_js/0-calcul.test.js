const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('should return the sum of the numbers', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(10, 3), 13);

    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);

    assert.strictEqual(calculateNumber(-1, 3), 2);
    assert.strictEqual(calculateNumber(-1, -3), -4);
  });
});
