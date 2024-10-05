const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
    it('should call the utils', () => {
        const spy = sinon.spy(Utils, 'calculateNumber');

        sendPaymentRequestToApi(10, 20);
        expect(spy.calledOnceWithExactly('SUM', 10, 20)).to.be.true;
        spy.restore();
    });
});
