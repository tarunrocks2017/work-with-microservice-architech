/* eslint-env mode, mocha, http, chai */

const request = require('supertest');

const config = require('../config/urlConfig');

describe('auth', () => {
  it('responds with json', (done) => {
    request(config.AUTH_URL)
      .post('/Register')
      .send({ email: 'johnStark@gmail.com', username: 'johny', userpassword: 'winterisComing' })
      .set('Accept', 'application/json')
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });

  it('responds with json', (done) => {
    request(config.AUTH_URL)
      .post('/login')
      .send({ email: 'john@gmail.com', userpassword: 'johnSnow' })
      .set('Accept', 'application/json')
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
});
