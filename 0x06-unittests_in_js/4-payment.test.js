#!/usr/bin/node
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('should stub Utils.calculateNumber and log correct message', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleSpy = sinon.spy(console, 'log');
    
    sendPaymentRequestToApi(100, 20);
    
    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
    
    calculateNumberStub.restore();
    consoleSpy.restore();
  });
});
