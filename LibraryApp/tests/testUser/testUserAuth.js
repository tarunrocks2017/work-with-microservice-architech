/* eslint-env mode, mocha, http, chai */
const request = require('supertest');

describe('userAuth', () => {
  it('should return login status', (done) => {
    request('http://localhost:4001')
      .post('/login')
      .send({ email: 't@h.gmail.com', password: 'th123' })
      .expect(302, done);
  });

  it('should return registration status ', (done) => {
    request('http://localhost:4001')
      .post('/Register')
      .send({ email: 'tau@gm.com', username: 'tarun', password: 'tarun' })
      .expect(200)
      .expect(/Register/, done);
  });
});
