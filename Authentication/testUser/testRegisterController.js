/* eslint-env mode, mocha, http, chai */
const Expect = require('chai').expect;

const controller = require('../User/Auth/AuthController');

describe('userData', () => {
  it('should return error msg for same user ', async () => {
    const item = {
      email: 'test124@gmail.com',
      username: 'testy',
      userpassword: await controller.doHash('testy'),
    };

    const result = await controller.enterData(item);
    const expected = 'duplicate user';

    Expect(result).equal(expected);
  });
});
