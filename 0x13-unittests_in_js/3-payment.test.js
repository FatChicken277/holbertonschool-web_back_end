const { spy } = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
  let requestSpy;
  before(function () {
    requestSpy = spy(Utils, 'calculateNumber');
  });

  after(function () {
    requestSpy.restore();
  });

  it('should send payment request', function () {
    sendPaymentRequestToApi(100, 20);
    expect(requestSpy.calledOnce);
    expect(requestSpy.args[0][0]).to.equal('SUM');
    expect(requestSpy.args[0][1]).to.equal(100);
    expect(requestSpy.args[0][2]).to.equal(20);
  });

  it('should return the same', function () {
    sendPaymentRequestToApi(100, 20);
    expect(requestSpy.calledOnce);
    expect(requestSpy.returnValues[0]).to.equal(120);
  });
});
