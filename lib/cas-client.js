'use strict';

var request = require('request').defaults({jar: true});

function CasClient(options) {
  this.username = options.username;
  this.password = options.password;
}

module.exports = CasClient;
