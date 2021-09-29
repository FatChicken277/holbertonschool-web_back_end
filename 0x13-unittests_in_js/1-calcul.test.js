const assert = require('assert');

const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should return the sum of 2 numbers', function () {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
      assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
      assert.strictEqual(calculateNumber('SUM', 0.4, 0.5), 1);
      assert.strictEqual(calculateNumber('SUM', -1.5, -3.7), -5);
    });
  });

  describe('SUBTRACT', function () {
    it('should return the subtract of 2 numbers', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), -3);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
      assert.strictEqual(calculateNumber('SUBTRACT', 0.4, 0.5), -1);
    });
  });

  describe('DIVIDE', function () {
    it('should return the divide of 2 numbers', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 2, 2), 1);
      assert.strictEqual(calculateNumber('DIVIDE', 0.4, 0.5), 0);
      assert.strictEqual(calculateNumber('DIVIDE', 1, 3.7), 0.25);
      assert.strictEqual(calculateNumber('DIVIDE', 1.5, 3.7), 0.5);
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });

  describe('ANOTHER TYPE', function () {
    it('should return error', function () {
      assert.strictEqual(calculateNumber('SUMM', 0.4, 0.5), 'Error');
      assert.strictEqual(calculateNumber('SUB', 0.4, 0.5), 'Error');
      assert.strictEqual(calculateNumber('DIV', 1, 3), 'Error');
    });
  });
});
