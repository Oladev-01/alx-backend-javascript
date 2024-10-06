const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
    it('should return a resolved promise', (done) => {
        getPaymentTokenFromAPI(true)
            .then((response) => {
                expect(response).to.include({ data: 'Successful response from the API' });
                done();
            }).catch((error) => done(error));
    });
    it('should do nothing for this test', (done) => {
       const response = getPaymentTokenFromAPI(false)
        expect(response).to.be.undefined;
        done();
    });
});
