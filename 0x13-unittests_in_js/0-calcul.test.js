import { strictEqual } from 'assert';
import calculateNumber from './0-calcul';

describe('calculateNumber', function () {
  it('should return the sum of 2 integers', function () {
    strictEqual(calculateNumber(1, 3), 4);
    strictEqual(calculateNumber(10, 3), 13);
  });

  it('should return the sum of 2 floats', function () {
    strictEqual(calculateNumber(1, 3.7), 5);
    strictEqual(calculateNumber(1.2, 3.7), 5);
    strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should return the sum of 2 negative integers', function () {
    strictEqual(calculateNumber(-1, 3), 2);
    strictEqual(calculateNumber(-1, -3), -4);
  });

  it('should return the sum of 2 negative floats', function () {
    strictEqual(calculateNumber(-1.7, 3), 1);
    strictEqual(calculateNumber(-1.2, -3.5), -4);
  });
});
