const request = require('request'); // Import request for HTTP calls
const { expect } = require('chai'); // Import chai for assertions
const app = require('./api'); // Import the app

describe('Index page', () => {

    it('should return the correct status code for GET /', (done) => {
        request('http://localhost:7865', (error, response, body) => {
            expect(response.statusCode).to.equal(200); // Check status code
            done();
        });
    });

    it('should return the correct result for GET /', (done) => {
        request('http://localhost:7865', (error, response, body) => {
            expect(body).to.equal('Welcome to the payment system'); // Check response body
            done();
        });
    });

    it('should return content type as text/html', (done) => {
        request('http://localhost:7865', (error, response, body) => {
            expect(response.headers['content-type']).to.include('text/html'); // Check content type
            done();
        });
    });

});
