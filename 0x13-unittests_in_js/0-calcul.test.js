import calculateNumber from './0-calcul';

const assert = require('assert');

describe('calculateNumber', function () {
  it('should return the sum of the numbers', function () {
    assert.strictEqual(calculateNumber(2, 3), 5);
  });
});
