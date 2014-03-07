CalNet Authentication Client
==============
Login to Berkeley's CAS through the terminal.

*Login session only exists within the terminal. Using this will not establish a browser session.

## Installation

1) Install with [npm](https://github.com/npm/npm):

    npm install calnet

2) Include module and enter CalNet credentials:

```js
var calnet = require('calnet').configure({
  username: 'USERNAME',
  password: 'PASSWORD'
});
```

## Usage

Let's try logging in and grabbing data from Berkeley's laundry service.

```js
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
```

## Running Tests

1) Install the development dependencies:

    npm install

2) Run the tests:

    make test
