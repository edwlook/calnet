'use strict';

var cred = require('../cred');
var casClient = require('../../lib').configure({
  username: cred.username,
  password: cred.password
});

// Attempt to login
casClient.login(function(err, data) {
  if (err) return console.log(err.message);
  var laundryUrl = 'https://csweb.housing.berkeley.edu/student/laundry/room_summary_srv.php';
  // Login successful, fetch laundry data
  casClient.get(laundryUrl, function(err, data) {
    if (err) return console.log(err.message);
    console.log(data);
  });
});
