import sinon from 'sinon';
import { expect } from 'chai';
import Utils from './utils.js';
import sendPaymentRequestToApi from './3-payment.js';

describe('sendPaymentRequestToApi', function () {
  it('should call Utils.calculateNumber with SUM and log the total', function () {
    const calculateSpy = sinon.spy(Utils, 'calculateNumber');
    const consoleSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(calculateSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;

    calculateSpy.restore();
    consoleSpy.restore();
  });
});
