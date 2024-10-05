const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    let consoleSpy;
    let calculateStub;
    beforeEach(() => {
        consoleSpy = sinon.spy(console, 'log');
        calculateStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    });

    afterEach(() => {
        consoleSpy.restore();
        calculateStub.restore();
    })
    it('should stub the method', () => {
        sendPaymentRequestToApi(100, 20);
        expect(consoleSpy.calledWithExactly('The total is: 10'));
        expect(calculateStub.calledOnceWithExactly('SUM', 100, 20));
    });
});
