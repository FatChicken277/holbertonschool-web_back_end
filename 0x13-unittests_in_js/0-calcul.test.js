const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the sum of 2 integers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(10, 3), 13);
  });

  it('should return the sum of 2 floats', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should return the sum of 2 negative integers', () => {
    assert.strictEqual(calculateNumber(-1, 3), 2);
    assert.strictEqual(calculateNumber(-1, -3), -4);
  });

  it('should return the sum of 2 negative floats', () => {
    assert.strictEqual(calculateNumber(-1.7, 3), 1);
    assert.strictEqual(calculateNumber(-1.2, -3.5), -4);
  });
});
