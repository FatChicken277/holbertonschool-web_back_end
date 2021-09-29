const { expect } = require('chai');

const calculateNumber = require('./2-calcul');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should return the sum of 2 numbers', function () {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
      expect(calculateNumber('SUM', 0.4, 0.5)).to.equal(1);
      expect(calculateNumber('SUM', -1.5, -3.7)).to.equal(-5);
    });
  });

  describe('SUBTRACT', function () {
    it('should return the subtract of 2 numbers', function () {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
      expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
      expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
      expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
      expect(calculateNumber('SUBTRACT', 0.4, 0.5)).to.equal(-1);
    });
  });

  describe('DIVIDE', function () {
    it('should return the divide of 2 numbers', function () {
      expect(calculateNumber('DIVIDE', 2, 2)).to.equal(1);
      expect(calculateNumber('DIVIDE', 0.4, 0.5)).to.equal(0);
      expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);
      expect(calculateNumber('DIVIDE', 1.5, 3.7)).to.equal(0.5);
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });

  describe('ANOTHER TYPE', function () {
    it('should return error', function () {
      expect(calculateNumber('SUMM', 0.4, 0.5)).to.equal('Error');
      expect(calculateNumber('SUB', 0.4, 0.5)).to.equal('Error');
      expect(calculateNumber('DIV', 1, 3)).to.equal('Error');
    });
  });
});
