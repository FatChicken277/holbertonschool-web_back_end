const { spy } = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
  const calculateNumberSpy = spy(Utils, 'calculateNumber');

  it('should send payment request', function () {
    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberSpy.calledOnce);
    expect(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20)).to.equal(true);

    calculateNumberSpy.restore();
  });
});
