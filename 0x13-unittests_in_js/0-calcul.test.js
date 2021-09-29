const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('should return the sum of 2 integers', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(10, 3), 13);
  });

  it('should return the sum of 2 floats', function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should return the sum of 2 negative integers', function () {
    assert.strictEqual(calculateNumber(-1, 3), 2);
    assert.strictEqual(calculateNumber(-1, -3), -4);
  });

  it('should return the sum of 2 negative floats', function () {
    assert.strictEqual(calculateNumber(-1.7, 3), 1);
    assert.strictEqual(calculateNumber(-1.2, -3.5), -4);
  });

  it('should return the sum of 2 strings', function () {
    assert.strictEqual(calculateNumber('-1.7', '3'), 1);
  });
});
