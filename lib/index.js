'use strict';

var CasClient = require('./cas-client');

module.exports = {

  configure: function(options) {
    return new CasClient(options);
  }

};
