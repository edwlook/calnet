var assert = require('chai').assert,
    Calnet = require('../lib/calnet');

describe('Calnet', function() {

  describe('#init()', function() {
    it('should set the username and password', function() {
      var calnet = new Calnet({
        username: 'fake-user',
        password: 'fake-pass'
      });
      assert('fake-user' === calnet.username, 'Username not set correctly.');
      assert('fake-pass' === calnet.password, 'Password not set correctly.');
    });
  });

});
