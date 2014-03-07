var assert = require('chai').assert,
    Calnet = require('../lib/calnet');

describe('Calnet', function() {

  var calnet;
  before(function() {
    calnet = new Calnet({
      username: 'fake-user',
      password: 'fake-pass'
    });
  });

  describe('#init()', function() {

    it('should set the username and password', function() {
      assert('fake-user' === calnet.username, 'Username not set correctly.');
      assert('fake-pass' === calnet.password, 'Password not set correctly.');
    });

    it('should throw an error', function() {
      var omitPassword = function() {
        var calnet = new Calnet({
          username: 'fake-user',
          password: ''
        });
      };
      assert.throw(omitPassword, 'Username or password not supplied.');
    });

  });

  describe('#login()', function() {

    it('should POST to login without error', function(done) {
      calnet.login(done);
    });

  });

  describe('#logout()', function() {

    it('should GET to logout without error', function(done) {
      calnet.logout(done);
    });

  });

  describe('#get()', function() {

    it('should GET without error', function(done) {
      calnet.get('http://www.berkeley.edu/', done);
    });

  });

});
