CalNet Authentication Service - Login
==============
Login to Berkeley's CAS through the terminal.

*Login session only exists within the terminal. Using this will not establish a browser session.

## Installation

1) Install with npm:

    npm install cas-login

2) Include module and enter CalNet credentials:

```js
var casClient = require('cas-login').configure({
  username: 'USERNAME',
  password: 'PASSWORD'
});
```

## Usage

Let's try logging in and grabbing data from Berkeley's laundry service.

```js
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
```
