const request = require('request');
const { expect } = require('chai');
const app = require('./api');
const port = 7865;
let server;

describe('Index page', () => {

    before((done) => {
        server = app.listen(port, () => {
            done();
        }).on('error', (err) => {
            if (err.code === 'EADDRINUSE') {
                console.log(`Port ${port} is already in use, trying to close the server...`);
                done();
            } else {
                done(err);
            }
        });
    });

    after((done) => {
        if (server) {
            server.close(() => {
                console.log('Server closed successfully');
                done();
            });
        } else {
            done();
        }
    });

    it('should return the correct status code', (done) => {
        request('http://localhost:7865', (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    it('should return the correct message', (done) => {
        request('http://localhost:7865', (err, res, body) => {
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
});

describe('Cart page', () => {

    before((done) => {
        server = app.listen(port, () => {
            done();
        }).on('error', (err) => {
            if (err.code === 'EADDRINUSE') {
                console.log(`Port ${port} is already in use, trying to close the server...`);
                done();
            } else {
                done(err);
            }
        });
    });

    after((done) => {
        if (server) {
            server.close(() => {
                console.log('Server closed successfully');
                done();
            });
        } else {
            done();
        }
    });

    it('should return the correct status code when :id is a number', (done) => {
        request('http://localhost:7865/cart/123', (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    it('should return the correct message when :id is a number', (done) => {
        request('http://localhost:7865/cart/123', (err, res, body) => {
            expect(body).to.equal('Payment methods for cart: 123');
            done();
        });
    });

    it('should return 404 when :id is NOT a number', (done) => {
        request('http://localhost:7865/cart/abc', (err, res, body) => {
            expect(res.statusCode).to.equal(404);
            expect(body).to.equal('Not found');
            done();
        });
    });
});
