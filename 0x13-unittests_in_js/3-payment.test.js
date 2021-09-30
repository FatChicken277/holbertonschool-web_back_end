const { spy } = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
  it('should send payment request', function () {
    const calculateNumberSpy = spy(Utils, 'calculateNumber');
    const consoleSpy = spy(console, 'log');

    const request = sendPaymentRequestToApi(100, 20);

    expect(calculateNumberSpy.calledOnce);
    expect(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20)).to.equal(true);

    expect(consoleSpy.calledWithExactly('The total is: 120')).to.equal(true);

    expect(calculateNumberSpy.returnValues[0]).to.equal(120);
    expect(Utils.calculateNumber('SUM', 100, 20)).to.equal(request);

    calculateNumberSpy.restore();
    consoleSpy.restore();
  });
});
