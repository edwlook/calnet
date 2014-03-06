'use strict';

var cred = require('../cred');
var casClient = require('../../lib').configure({
  username: cred.username,
  password: cred.password
});

casClient.login(function(err, data) {
  if (err) return console.log(err.message);
  casClient.get('https://csweb.housing.berkeley.edu/student/laundry/room_summary_srv.php', function(err, data) {
    if (err) return console.log(err.message);
    console.log(data);
  });
});
