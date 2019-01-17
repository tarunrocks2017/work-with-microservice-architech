/* eslint-env mode, mocha, http, chai */
const request = require('supertest');

describe('MovieRoute', () => {
  it('should return movie home page', (done) => {
    request('http://localhost:4001')
      .get('/movies')
      .expect(302)
      .expect(/Login/, done);
  });

  it('should return movie with id ', (done) => {
    request('http://localhost:4001')
      .get('/movies/1')
      .expect('Content-type', /text/)
      .expect(302)
      .expect(/Login/, done);
  });

  it('should show 404', (done) => {
    request('http://localhost:4001')
      .get('/fghfghgf')
      .expect(404, done);
  });
});
