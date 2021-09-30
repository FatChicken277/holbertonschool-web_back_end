const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
  const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

  it('should send payment request', function () {
    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberSpy.calledOnce).to.equal(true);
    expect(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20)).to.equal(true);

    calculateNumberSpy.restore();
  });
});
