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
