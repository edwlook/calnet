'use strict';

var cred = require('../cred');
var calnet = require('../../lib').configure({
  username: cred.username,
  password: cred.password
});

// Attempt to login
calnet.login(function(err, data) {
  if (err) return console.log(err.message);
  var laundryUrl = 'https://csweb.housing.berkeley.edu/student/laundry/room_summary_srv.php';
  // Login successful, fetch laundry data
  calnet.get(laundryUrl, function(err, data) {
    if (err) return console.log(err.message);
    console.log(data);
  });
});
