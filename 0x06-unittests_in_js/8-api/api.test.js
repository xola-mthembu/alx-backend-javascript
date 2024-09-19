const request = require('request');
const { expect } = require('chai');
const { app, startServer } = require('./api');

describe('Index page', () => {
  const API_URL = 'http://localhost:7865';
  let server;

  before(async function() {
    this.timeout(5000); // Increase timeout to 5 seconds
    server = await startServer();
  });

  after((done) => {
    server.close(done);
  });

  it('correct status code', (done) => {
    request.get(API_URL, (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('correct result', (done) => {
    request.get(API_URL, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
