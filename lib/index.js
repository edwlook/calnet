'use strict';

var Calnet = require('./calnet');

module.exports = {

  configure: function(options) {
    return new Calnet(options);
  }

};
