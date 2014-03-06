'use strict';

var CasClient = require('./cas-client');

module.exports = {

  configure: function(options) {
    if (!options || !options.username || !options.password) {
      throw new Error('Username or password not supplied.');
    }
    return new CasClient(options);
  }

};
